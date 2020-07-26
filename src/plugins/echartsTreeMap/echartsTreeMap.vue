
<script>
import pluginChartsMixins from '../pluginChartsMixins';
// 矩形树图
export default {
  name: 'xaEchartsTreeMap',

  mixins: [pluginChartsMixins],

  render(h) {
    return <div class="xa-echarts-treemap" style={this.styles} id={this.custom.id}></div>
  }
}
</script>

<style lang="scss">
</style>