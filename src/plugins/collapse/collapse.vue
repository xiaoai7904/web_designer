<script>
import pluginsMixins from '../pluginsMixins';
export default {
  name: 'xaCollapse',

  mixins: [pluginsMixins],

  methods: {
    changeEvent() {
      this.eventFunctionHandler('change')
    }
  },

  render(h) {
    return <div class="xa-collapse" style={this.styles}>
      <el-collapse
        value={this.options.value}
        accordion={this.options.accordion}
        onChange={this.changeEvent}
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