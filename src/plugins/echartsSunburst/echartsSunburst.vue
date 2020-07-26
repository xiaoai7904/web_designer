
<script>
import pluginChartsMixins from '../pluginChartsMixins';
// 旭日图
export default {
  name: 'xaEchartsSunburst',

  mixins: [pluginChartsMixins],
  
  render(h) {
    return <div class="xa-echarts-sunburst" style={this.styles} id={this.custom.id}></div>
  }
}
</script>

<style lang="scss">
</style>