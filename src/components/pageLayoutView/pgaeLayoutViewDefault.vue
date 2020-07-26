<script>
/* eslint-disable no-unused-vars */
import Vue from 'vue';
import Component from 'vue-class-component';
import { State, Mutation } from 'vuex-class'

import Configuration from '@/modules/configuration/configuration'
import VueDraggableResizable from '@/components/draggableResizable/draggableResizable.vue'
import { uuid, throttle, extend, toLine } from '@/modules/utils/utils'

let configuration = new Configuration()
let _this = null

@Component({
  components: { VueDraggableResizable },
  props: {
    isRuntime: Boolean
  }
})
class PageLayoutViewDefault extends Vue {
  @State('page') page
  @State('plugins') plugins
  @State('currentPlugins') currentPlugins
  @State('clipboard') clipboard

  @Mutation('updatePageProps') updatePageProps;
  @Mutation('addPlugin') addPlugin
  @Mutation('updateCurrentPlugins') updateCurrentPluginsFn
  @Mutation('updatePluginsProps') updatePluginsProps
  @Mutation('delPlugin') delPluginFn
  @Mutation('setClipboard') setClipboardFn
  @Mutation('setPluginsRef') setPluginsRefFn

  checkPlugin = false
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
  createLeftMenu(h) {
    return <v-contextmenu ref="contextmenu">
      {this.leftMenuList.map(item => {
        if (item.isDivider) {
          return <v-contextmenu-item divider></v-contextmenu-item>
        }
        return <v-contextmenu-item key={item.id} onClick={(vm, e) => this.$emit('leftMenuClick', item)}>{item.label}</v-contextmenu-item>
      })}
    </v-contextmenu>
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
      snap={false}
      minHeight={10}
      parentSelector=".page-layout-view-default"
      drag-handle={item.children ? ".drag-handle" : ""}
      onResizing={this.resizing}
      onDragging={this.dragging}
      onActivated={() => this.activatedFn(item.id)}
      onDeactivated={this.deactivatedFn}
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
  createComponentsItems(h) {
    const getComponentStyle = (item) => {
      return {
        paddingTop: item.style.paddingTop + 'px',
        paddingBottom: item.style.paddingBottom + 'px',
        paddingLeft: item.style.paddingLeft + 'px',
        paddingRight: item.style.paddingRight + 'px',
        borderWidth: item.style.borderWidth + 'px',
        borderStyle: item.style.borderStyle,
        borderColor: item.style.borderColor,
        backgroundColor: item.style.backgroundColor,
        position: 'absolute',
        left: item.custom.x + 'px',
        top: item.custom.y + 'px',
        width: item.custom.width + 'px',
        height: item.custom.height + 'px'
      };
    }

    if (this.isRuntime) {
      return this.plugins.map(item => {
        return (
          <div id={item.id} style={getComponentStyle(item)}>
            {h(item.key, { key: item.id, ref: item.id, props: { options: item.props, children: item.children, custom: item.custom } })}
          </div>
        );
      });
    }
    
    return this.plugins.map(item => this.createRoot(h, item, h(item.key, { key: item.id, ref: item.id, props: { options: item.props, children: item.children, custom: item.custom }, directives: [{ name: 'contextmenu', arg: 'contextmenu' }] })))
  }
  mounted() {
    _this = this
    this.setPluginsRefFn(this.$refs)
  }

  render(h) {
    return <div class="page-layout-view-default" >
      {!this.isRuntime && this.createLeftMenu(h)}
      {this.createComponentsItems(h)}
    </div>
  }
}
export default PageLayoutViewDefault

</script>

<style lang="scss">
.page-layout-view-default {
  width: 100%;
  height: 100%;
}
</style>

