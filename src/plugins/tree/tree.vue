<script>
import pluginsMixins from '../pluginsMixins';
export default {
  name: 'xaTree',

  mixins: [pluginsMixins],

  data() {
    return {
      currentValue: [],
      loading: false
    }
  },

  watch: {
    'options.data': {
      handler() {
        this.currentValue = this.options.data.slice()
      },
      immediate: true
    }
  },

  methods: {
    // 节点被点击时的回调
    nodeClickEvent(data, node, currentNode) {
      this.eventFunctionHandler('nodeClick', data, node, currentNode)
    },
    // 当某一节点被鼠标右键点击时会触发该事件
    nodeContextmenuEvent(event, data, node, currentNode) {
      this.eventFunctionHandler('nodeContextmenu', event, data, node, currentNode)
    },
    // 节点选中状态发生变化时的回调
    checkChangeEvent(data, isCheck, isChildCheck) {
      this.eventFunctionHandler('checkChange', data, isCheck, isChildCheck)
    },
    // 当复选框被点击的时候触发
    checkEvent(data, checked) {
      this.eventFunctionHandler('check', data, checked)
    },
    // 当前选中节点变化时触发的事件
    currentChangeEvent(data, node) {
      this.eventFunctionHandler('currentChange', data, node)
    },
    // 节点被展开时触发的事件
    nodeExpandEvent(data, node, currentNode) {
      this.eventFunctionHandler('nodeExpand', data, node, currentNode)
    },
    // 节点被关闭时触发的事件
    nodeCollapseEvent(data, node, currentNode) {
      this.eventFunctionHandler('nodeCollapse', data, node, currentNode)
    },
    // 节点开始拖拽时触发的事件
    nodeDragStartEvent(node, event) {
      this.eventFunctionHandler('nodeDragStart', node, event)
    },
    // 拖拽进入其他节点时触发的事件
    nodeDragEnterEvent(dargNode, node, event) {
      this.eventFunctionHandler('nodeDragEnter', dargNode, node, event)
    },
    // 拖拽离开某个节点时触发的事件
    nodeDragLeaveEvent(dargNode, node, event) {
      this.eventFunctionHandler('nodeDragLeave', dargNode, node, event)
    },
    // 在拖拽节点时触发的事件
    nodeDragOverEvent(dargNode, node, event) {
      this.eventFunctionHandler('nodeDragOver', dargNode, node, event)
    },
    // 拖拽结束时（可能未成功）触发的事件
    nodeDragEndEvent(dargNode, node1, node2, event) {
      this.eventFunctionHandler('nodeDragEnd', dargNode, node1, node2, event)
    },
    // 拖拽成功完成时触发的事件
    nodeDropEvent(dargNode, node1, node2, event) {
      this.eventFunctionHandler('nodeDrop', dargNode, node1, node2, event)
    },
    // 获取组件当前值
    getCurrentValue() {
      return this.currentValue
    },
    // 设置组件当前值 
    setCurrentValue(value) {
      this.currentValue = value
    },
  },

  render(h) {
    return <div class="xa-tree" style={this.styles}>
      <el-tree
        data={this.currentValue}
        props={this.options.props}
        load={this.options.load}
        empty-text={this.options.emptyText}
        render-content={this.options.renderContent}
        highlight-current={this.options.highlightCurrent}
        default-expand-all={this.options.defaultExpandAll}
        show-checkbox={this.options.showCheckbox}
        indent={this.options.indent}
        icon-class={this.options.iconClass}
        lazy={this.options.lazy}
        draggable={this.options.draggable}
        onNode-click={this.nodeClickEvent}
        onNode-contextmenu={this.nodeContextmenuEvent}
        onCheck-change={this.checkChangeEvent}
        onCheck={this.checkEvent}
        onCurrent-change={this.currentChangeEvent}
        onNode-expand={this.nodeExpandEvent}
        onNode-collapse={this.nodeCollapseEvent}
        onNode-drag-start={this.nodeDragStartEvent}
        onNode-drag-enter={this.nodeDragEnterEvent}
        onNode-drag-leave={this.nodeDragLeaveEvent}
        onNode-drag-over={this.nodeDragOverEvent}
        onNode-drag-end={this.nodeDragEndEvent}
        onNode-drop={this.nodeDropEvent}
      >
      </el-tree>
    </div>
  }
}
</script>

<style lang="scss">
</style>
