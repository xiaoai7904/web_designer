
<script>
import pluginChartsMixins from '../pluginChartsMixins';

// 盒须图
export default {
  name: 'xaEchartsBoxplot',

  mixins: [pluginChartsMixins],
  
  render(h) {
    return <div class="xa-echarts-boxplot" style={this.styles} id={this.custom.id}></div>
  }
}
</script>

<style lang="scss">
</style>