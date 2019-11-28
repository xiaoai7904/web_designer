<script>
/* eslint-disable no-unused-vars */
import Vue from 'vue';
import Component from 'vue-class-component';
import { State, Mutation } from 'vuex-class'

import Configuration from '@/modules/configuration/configuration'
import VueDraggableResizable from '@/components/draggableResizable/draggableResizable.vue'
import pageCanvas from '@/components/pageCanvas/pageCanvas.vue'
import { uuid, throttle, extend } from '@/modules/utils/utils'
import { Watch } from '@/modules/vuePropertyDecorator/vuePropertyDecorator'
import PageEventManage from '@/modules/pageEventManage/pageEventManage'

let configuration = new Configuration()
let _this = null
@Component({
  components: { VueDraggableResizable, pageCanvas }
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
    dropComponentsOption.length && this.addPlugin(extend(true, {}, dropComponentsOption[0], { custom: { x: event.offsetX, y: event.offsetY } }))
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
        _this.updatePluginsProps({ id: _this.currentPlugins[0].id, modify: { id: 'custom.x', value: x } })
        _this.updatePluginsProps({ id: _this.currentPlugins[0].id, modify: { id: 'custom.y', value: y } })
      }
    }
  }, 500)
  activatedFn(id) {
    this.checkPlugin = true
    this.updateCurrentPluginsFn(this.plugins.filter(item => item.id === id))
  }
  deactivatedFn() {
    this.checkPlugin = false
    this.updateCurrentPluginsFn([])
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
      {this.checkPlugin && <ul class="designer-content-setting__ul">
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
  createComponentsItem(h) {
    let items = []
    items = this.plugins.map(item => {
      return this.createRoot(h, item, h(item.key, { props: { options: item.props } }))
    })
    return items
  }
  createRoot(h, item, children) {
    return h('VueDraggableResizable', {
      class: ['designer-content-drag'],
      key: item.id,
      props: { w: item.custom.width, h: item.custom.height, x: item.custom.x, y: item.custom.y, parent: '.page-canvas__components', snap: true, minHeight: 10, parentSelector: '.page-canvas__components' },
      on: { resizing: this.resizing, dragging: this.dragging, activated: this.activatedFn.bind(this, item.id), deactivated: this.deactivatedFn }
    }, [h('div', {
      class: ['designer-content-drag-proxy'],
      style: {
        paddingTop: item.style.paddingTop + 'px',
        paddingBottom: item.style.paddingBottom + 'px',
        paddingLeft: item.style.paddingLeft + 'px',
        paddingRight: item.style.paddingRight + 'px',
        borderWidth: item.style.borderWidth + 'px',
        borderStyle: item.style.borderStyle,
        borderColor: item.style.borderColor,
        backgroundColor: item.style.backgroundColor
      },
      attrs: { id: item.id }
    }, [children])])
  }
  render(h) {
    return <div class="designer-content" >
      {this.createRuler(h)}
      {this.createSetting(h)}
      {this.createAuxiliaryLineX(h)}
      {this.createAuxiliaryLineY(h)}
    </div>
  }
  mounted() {
    _this = this
    this.bindEvent()
  }
  destroyed() {
    this.pageEvent && this.pageEvent.destroyedEvent()
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
    }
    &__y {
      top: 0;
      left: 0;
      width: 100%;
      position: absolute;
      border-top: 1px solid red;
      transition: translateY 0.3s;
      display: none;
    }
  }
}
</style>
