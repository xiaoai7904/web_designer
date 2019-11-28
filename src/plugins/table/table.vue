<script>
export default {
  name: 'xaTable',
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
    return <div class="xa-table" style={this.styles}>
      <el-table
        data={this.options.data}
        stripe={this.options.stripe}
        border={this.options.border}
        size={this.options.size}
        fit={this.options.fit}
        show-header={this.options.showHeader}
        empty-text={this.options.emptyText}
        show-summary={this.options.showSummary}
        sum-text={this.options.sumText}
        summary-method={this.options.summaryMethod}
        span-method={this.options.spanMethod}
      >
        {this.options.children.map((item, index) => {
          return <el-table-column key={index} prop={item.prop} label={item.label} width={item.width}></el-table-column>
        })}
      </el-table>
    </div>
  }
}
</script>

<style lang="scss">
</style>
