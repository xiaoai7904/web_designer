<script>
import pluginsMixins from '../pluginsMixins';
export default {
  name: 'xaCalendar',

  mixins: [pluginsMixins],

  render(h) {
    return <div class="xa-calendar" style={this.styles}>
      <el-calendar v-model={this.options.value}></el-calendar>
    </div>
  }
}
</script>

<style lang="scss">
</style>
