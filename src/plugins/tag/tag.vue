<script>
import pluginsMixins from '../pluginsMixins';
export default {
  name: 'xaTag',

  mixins: [pluginsMixins],

  render(h) {
    return <div class="xa-tag" style={this.styles}>
      <el-tag
        type={this.options.type}
        closable={this.options.closable}
        hit={this.options.hit}
        color={this.options.color}
        size={this.options.size}
      >{this.options.value}</el-tag>
    </div>
  }
}
</script>

<style lang="scss">
</style>
