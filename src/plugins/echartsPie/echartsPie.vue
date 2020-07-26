
<script>
import pluginChartsMixins from '../pluginChartsMixins';

// 饼图
export default {
  name: 'xaEchartsPie',

  mixins: [pluginChartsMixins],
  
  render(h) {
    return <div class="xa-echarts-pie" style={this.styles} id={this.custom.id}></div>
  }
}
</script>

<style lang="scss">
</style>