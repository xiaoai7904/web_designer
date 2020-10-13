<script>
import pluginsMixins from '../pluginsMixins';
export default {
  name: 'xaButton',

  mixins: [pluginsMixins],

  methods: {
    clickEvent() {
      this.eventFunctionHandler('click')
    }
  },

  render(h) {
    return <div class="xa-button" style={this.styles}>
      <el-button
        disabled={this.options.disabled}
        type={this.options.type}
        round={this.options.round}
        plain={this.options.plain}
        circle={this.options.circle}
        size={this.options.size}
        onClick={this.clickEvent}
      >
        {this.options.content}
      </el-button>
    </div>
  }
}
</script>

<style lang="scss">
.xa-button {
  .el-button {
    width: 100%;
    height: 100%;
  }
}
</style>