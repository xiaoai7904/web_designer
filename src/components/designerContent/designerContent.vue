<script>
/* eslint-disable no-unused-vars */
import Vue from 'vue';
import Component from 'vue-class-component';
import { State, Mutation } from 'vuex-class'

import Configuration from '@/modules/configuration/configuration'
import VueDraggableResizable from '@/components/draggableResizable/draggableResizable.vue'
import pageCanvas from '@/components/pageCanvas/pageCanvas.vue'
import { uuid, throttle, extend, toLine } from '@/modules/utils/utils'
import { Watch } from '@/modules/vuePropertyDecorator/vuePropertyDecorator'
import PageEventManage from '@/modules/pageEventManage/pageEventManage'
import PageAutoView from '@/components/pageAutoView/pageAutoView.vue';

let configuration = new Configuration()
let _this = null
@Component({
  components: { VueDraggableResizable, pageCanvas, PageAutoView }
})
class designerArea extends Vue {
  @State('page') page
  @State('plugins') plugins
  @State('currentPlugins') currentPlugins
  @State('clipboard') clipboard

  @Mutation('addPlugin') addPlugin
  @Mutation('updateCurrentPlugins') updateCurrentPluginsFn
  @Mutation('updatePluginsProps') updatePluginsProps
  @Mutation('delPlugin') delPluginFn
  @Mutation('setClipboard') setClipboardFn

  checkPlugin = false
  pageEvent = null
  auxLineY = {}
  auxLineX = {}
  isLockPageEvent = false
  leftMenuList = [{
    id: '1',
    label: '剪切'
  }, {
    id: '2',
    label: '复制'
  }, {
    id: '3',
    label: '粘贴'
  }, {
    id: 'divider1',
    isDivider: true
  }, {
    id: '4',
    label: '删除'
  }]

  bindEvent() {
    this.pageEvent = new PageEventManage()

    this.pageEvent
      .register({ key: 'delete' }, this.delPluginCallback)
      .register({ key: 's', isCtrl: true }, this.savePageCallback)
      .register({ key: 'z', isCtrl: true }, this.cancelCallback)
      .register({ key: 'c', isCtrl: true }, this.copyPluginCallback)
      .register({ key: 'v', isCtrl: true }, this.pastePluginCallback)

    window.Uidesigner.$event.once('open_code_editor', (data) => {
      this.isLockPageEvent = data
    })
  }
  delPluginCallback() {
    if (this.isLockPageEvent) return false
    this.currentPlugins.length && this.delPluginFn(this.currentPlugins[0].id)
  }
  savePageCallback() {
    if (this.isLockPageEvent) return false
  }
  cancelCallback() {
    if (this.isLockPageEvent) return false
  }
  copyPluginCallback() {
    if (this.isLockPageEvent) return false
    this.setClipboardFn(extend(true, [], this.currentPlugins))
  }
  pastePluginCallback() {
    if (this.isLockPageEvent) return false
    if (this.clipboard && this.clipboard.length) {
      let orgData = this.clipboard[0].custom
      let _id = this.clipboard[0].key + '_' + uuid()
      let _x = orgData.x + 10 > this.page.style.w ? this.page.style.w - orgData.w : orgData.x + 10
      let _y = orgData.y + 10 > this.page.style.h ? this.page.style.h - orgData.h : orgData.y + 10
      let _newPlugins = extend(true, {}, this.clipboard[0], { custom: { id: _id, x: _x, y: _y }, id: _id })

      // 更新剪贴板为当前复制后的组件
      this.setClipboardFn(extend(true, [], [_newPlugins]))
      this.addPlugin(_newPlugins)
    }
  }
  dragover(event) {
    event.preventDefault()
  }
  drop(event) {
    let data = event.dataTransfer.getData("componentsId");
    let id = /^([a-zA-Z]+)/.exec(data)
    let dropComponentsOption = null

    id && (dropComponentsOption = configuration.getOption(id[0]))

    dropComponentsOption && dropComponentsOption.length && this.addPlugin(extend(true, {}, dropComponentsOption[0], { custom: { x: event.offsetX, y: event.offsetY } }))
  }
  dragend(event) {
    event.dataTransfer.clearData()
  }
  resizing = throttle((x, y, w, h) => {
    if (_this) {
      if (_this.currentPlugins.length) {
        _this.updatePluginsProps({ id: _this.currentPlugins[0].id, modify: { id: 'custom.x', value: x } })
        _this.updatePluginsProps({ id: _this.currentPlugins[0].id, modify: { id: 'custom.y', value: y } })
        _this.updatePluginsProps({ id: _this.currentPlugins[0].id, modify: { id: 'custom.width', value: w } })
        _this.updatePluginsProps({ id: _this.currentPlugins[0].id, modify: { id: 'custom.height', value: h } })
      }
    }
  }, 500)
  dragging = throttle((x, y) => {
    if (_this) {
      if (_this.currentPlugins.length) {
        _this.currentPlugins[0] && _this.updatePluginsProps({ id: _this.currentPlugins[0].id, modify: { id: 'custom.x', value: x } })
        _this.currentPlugins[0] && _this.updatePluginsProps({ id: _this.currentPlugins[0].id, modify: { id: 'custom.y', value: y } })

        _this.currentPlugins[0] && _this.currentPlugins[0].key !== 'xaContainerLayout' && _this.detectingContainerCompoents()
      }
    }
  }, 500)
  activatedFn(id) {
    this.updateCurrentPluginsFn(this.plugins.filter(item => item.id === id))
    this.checkPlugin = true
  }
  deactivatedFn() {
    this.checkPlugin = false
    this.updateCurrentPluginsFn([])
  }
  detectingContainerCompoents() {
    let containerComponents = _this.plugins.filter(item => item.key === 'xaContainerLayout')
    // 横向求重叠公式: (right1-left1)+(right2-left2) - ( max(right1,right2) - min(left1,left2) )
    let left2 = _this.currentPlugins[0].custom.x
    let right2 = _this.currentPlugins[0].custom.x + _this.currentPlugins[0].custom.width

    let top2 = _this.currentPlugins[0].custom.y
    let bottom2 = _this.currentPlugins[0].custom.y + _this.currentPlugins[0].custom.height

    let i = 0

    for (let len = containerComponents.length; i < len; i++) {
      let item = containerComponents[i]

      let left1 = item.custom.x
      let right1 = item.custom.x + item.custom.width

      let top1 = item.custom.y
      let bottom1 = item.custom.y + item.custom.height

      // 计算重叠矩形宽度和高度
      let areaW = (right1 - left1) + (right2 - left2) - (Math.max(right1, right2) - Math.min(left1, left2))
      let areaH = (bottom1 - top1) + (bottom2 - top2) - (Math.max(bottom1, bottom2) - Math.min(top1, top2))
      // 遮挡矩形面积
      let area = areaW * areaH
      // 遮挡矩形面积大于等于 当前拖拽组件面积一半 就把当前组件添加到该容器中
      if (areaW > 0 && areaH > 0 && area >= _this.currentPlugins[0].custom.width / 2 * _this.currentPlugins[0].custom.height) {
        if (!item.children.find(item => item.id === _this.currentPlugins[0].id)) {
          let copyPlugins = [..._this.currentPlugins]
          copyPlugins[0].custom.x = 0
          copyPlugins[0].custom.y = 0
          _this.updatePluginsProps({ id: item.id, modify: { id: 'children', value: [...item.children, ...copyPlugins] } })
          _this.delPluginFn(_this.currentPlugins[0].id)
          _this.updateCurrentPluginsFn(copyPlugins)
        }
        break;
      }
    }
  }
  handleLeftMenuClick(vm, e, item) {
    if (!this.currentPlugins || !this.currentPlugins[0]) {
      this.$message.error('当前没有选中组件,请选中需要操作的组件在进行' + item.label);
      return false
    }
    const eventCallback = {
      // 剪切
      eventCb1: () => {
        this.copyPluginCallback()
        this.delPluginCallback()
      },
      // 复制
      eventCb2: () => {
        this.copyPluginCallback()
      },
      // 粘贴
      eventCb3: () => {
        this.pastePluginCallback()
      },
      // 删除
      eventCb4: () => {
        this.delPluginCallback()
      }
    }

    eventCallback[`eventCb${item.id}`]()
  }
  showVruleLine(e) {
    this.auxLineY = {
      display: 'block',
      transform: `translateY(${e.clientY - 60}px)`
    }
  }
  hideVruleLine(e) {
    this.auxLineY = {
      display: 'none',
    }
  }
  showHruleLine(e) {
    this.auxLineX = {
      display: 'block',
      transform: `translateX(${e.clientX - 200}px)`
    }
  }
  hideHruleLine(e) {
    this.auxLineX = {
      display: 'none',
    }
  }
  createRuler(h) {
    // TODO 没有考虑多页面,后期考虑
    return <div class="designer-content-ruler">
      <pageCanvas
        xw={this.page.style.w + 18}
        xh={18}
        yw={this.page.style.h + 18}
        yh={18}
        background={this.page.style.background}
        on-drop={($event) => this.drop($event)}
        on-dragover={($event) => this.dragover($event)}
        on-dragend={($event) => this.dragend($event)}
        on-showVruleLine={e => { this.showVruleLine(e) }}
        on-hideVruleLine={e => { this.hideVruleLine(e) }}
        on-showHruleLine={e => { this.showHruleLine(e) }}
        on-hideHruleLine={e => { this.hideHruleLine(e) }}>
        {this.createComponentsItem(h)}
      </pageCanvas>
    </div>
  }
  createSetting(h) {
    return <div class="designer-content-setting">
      {this.currentPlugins[0] && this.page.style.layoutStyle === '1' && <ul class="designer-content-setting__ul">
        <li>
          <span>Y:</span>
          <span>{this.currentPlugins[0].custom.y}</span>
        </li>
        <li>
          <span>X:</span>
          <span>{this.currentPlugins[0].custom.x}</span>
        </li>
        <li>
          <span>高:</span>
          <span>{this.currentPlugins[0].custom.height}px</span>
        </li>
        <li>
          <span>宽:</span>
          <span>{this.currentPlugins[0].custom.width}px</span>
        </li>
      </ul>}
    </div>
  }
  createAuxiliaryLineY(h) {
    return <div class="designer-content-aus-line__y" style={this.auxLineY}></div>
  }
  createAuxiliaryLineX(h) {
    return <div class="designer-content-aus-line__x" style={this.auxLineX}></div>
  }
  createLeftMenu(h) {
    return <v-contextmenu ref="contextmenu">
      {this.leftMenuList.map(item => {
        if (item.isDivider) {
          return <v-contextmenu-item divider></v-contextmenu-item>
        }
        return <v-contextmenu-item key={item.id} onClick={(vm, e) => this.handleLeftMenuClick(vm, e, item)}>{item.label}</v-contextmenu-item>
      })}
    </v-contextmenu>
  }
  createComponentsItem(h) {
    // 固定布局
    if (this.page.style.layoutStyle === '1') {
      let items = []
      items = this.plugins.map(item => {
        return this.createRoot(h, item, h(item.key, { props: { options: item.props, children: item.children, custom: item.custom }, directives: [{ name: 'contextmenu', arg: 'contextmenu' }] }))
      })
      return items
    }

    // 自适应布局
    return <PageAutoView children={this.plugins} onLeftMenuClick={(item) => this.handleLeftMenuClick(null, null, item)} />
  }
  createRoot(h, item, children) {
    const style = {
      paddingTop: item.style.paddingTop + 'px',
      paddingBottom: item.style.paddingBottom + 'px',
      paddingLeft: item.style.paddingLeft + 'px',
      paddingRight: item.style.paddingRight + 'px',
      borderWidth: item.style.borderWidth + 'px',
      borderStyle: item.style.borderStyle,
      borderColor: item.style.borderColor,
      backgroundColor: item.style.backgroundColor
    }

    let currentPluginsId = this.currentPlugins && this.currentPlugins[0] && this.currentPlugins[0].id

    return <VueDraggableResizable
      class={item.children ? "designer-content-drag container-components" : "designer-content-drag"}
      key={item.id}
      w={item.custom.width}
      h={item.custom.height}
      x={item.custom.x}
      y={item.custom.y}
      active={currentPluginsId === item.id}
      parent
      snap={true}
      minHeight={10}
      parentSelector=".page-canvas__components"
      drag-handle={item.children ? ".drag-handle" : ""}
      onResizing={this.resizing}
      onDragging={this.dragging}
      onActivated={() => this.activatedFn(item.id)}
      deactivated={this.deactivatedFn}
    >
      {item.children && <div class="drag-handle">
        <i class="iconfont icontuozhuai" />
        <span class="drag-handle--label">拖动区域</span>
      </div>}
      <div class="designer-content-drag-proxy" id={item.id} style={style}>
        {children}
      </div>
    </VueDraggableResizable>
  }
  mounted() {
    _this = this
    this.bindEvent()
  }
  destroyed() {
    this.pageEvent && this.pageEvent.destroyedEvent()
  }
  render(h) {
    return <div class="designer-content" >
      {this.createRuler(h)}
      {this.createSetting(h)}
      {this.createAuxiliaryLineX(h)}
      {this.createAuxiliaryLineY(h)}
      {this.createLeftMenu(h)}
    </div>
  }
}
export default designerArea

</script>

<style lang="scss">
.designer-content {
  width: 100%;
  height: 100%;
  position: relative;
  &-ruler {
    width: 100% !important;
    height: calc(100% - 30px);
    padding: 0 !important;
  }
  &-setting {
    height: 30px;
    line-height: 30px;
    border-top: 1px solid #c3c3c3;
    &__ul {
      flex-direction: row-reverse;
      display: flex;
      align-items: center;
      list-style: none;
      margin: 0;
      font-size: 12px;
      li {
        margin-right: 15px;
      }
    }
  }
  &-drag {
    &-proxy {
      border: 1px solid #000;
      background: #fff;
      overflow: auto;
      height: 100%;
      width: 100%;
      box-sizing: border-box;
      position: relative;
    }
  }
  &__container {
    width: calc(100% - 19px);
    height: calc(100% - 19px);
    position: relative;
    top: 19px;
    left: 19px;
  }
  &-aus-line {
    &__x {
      top: 0;
      left: 0;
      height: 100%;
      position: absolute;
      border-left: 1px solid red;
      transition: translateX 0.3s;
      display: none;
      z-index: 999;
    }
    &__y {
      top: 0;
      left: 0;
      width: 100%;
      position: absolute;
      border-top: 1px solid red;
      transition: translateY 0.3s;
      display: none;
      z-index: 999;
    }
  }
  .container-components {
    .handle-bm,
    .handle-bl,
    .handle-br {
      bottom: -30px !important;
    }
  }
  .drag-handle {
    background: #dedede;
    height: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    &:hover {
      cursor: move;
    }
    &--label {
      font-size: 12px;
      color: #424242;
    }
  }
}
</style>
