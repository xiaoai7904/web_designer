
<script>
import pluginChartsMixins from '../pluginChartsMixins';
// 散点图
export default {
  name: 'xaEchartsScatter',

  mixins: [pluginChartsMixins],
  
  render(h) {
    return <div class="xa-echarts-scatter" style={this.styles} id={this.custom.id}></div>
  }
}
</script>

<style lang="scss">
</style>