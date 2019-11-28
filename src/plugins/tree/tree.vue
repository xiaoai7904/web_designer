<script>
export default {
  name: 'xaTree',
  data() { return {} },
  props: {
    options: Object
  },
  methods: {},
  computed: {
    styles() {
      return {
        width: '100%',
        height: '100%'
      }
    }
  },
  render(h) {
    return <div class="xa-tree" style={this.styles}>
      <el-tree
        data={this.options.data}
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
      >
      </el-tree>
    </div>
  }
}
</script>

<style lang="scss">
</style>
