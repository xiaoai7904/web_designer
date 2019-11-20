<script>
export default {
  name: 'xaCollapse',
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
    return <div class="xa-collapse" style={this.styles}>
      <el-collapse
        value={this.options.value}
        accordion={this.options.accordion}
      >
        {this.options.children.map(item => {
          return <el-collapse-item title={item.label} name={item.id}>
            <div>{item.content}</div>
          </el-collapse-item>
        })}
      </el-collapse>
    </div>
  }
}
</script>

<style lang="scss">
.xa-collapse {
  .el-collapse-item .el-collapse-item__header {
    background-color: #ffffff;
    color: #303133;
  }
}
</style>