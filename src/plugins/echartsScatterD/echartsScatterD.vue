
<script>
import pluginChartsMixins from '../pluginChartsMixins';
// 3D散点图
export default {
  name: 'xaEchartsScatterD',

  mixins: [pluginChartsMixins],

  render(h) {
    return <div class="xa-echarts-scatter-d" style={this.styles} id={this.custom.id}></div>
  }
}
</script>

<style lang="scss">
</style>