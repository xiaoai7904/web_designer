
<script>
import pluginChartsMixins from '../pluginChartsMixins';

// 仪表盘
export default {
  name: 'xaEchartsGauge',

  mixins: [pluginChartsMixins],

  render(h) {
    return <div class="xa-echarts-gauge" style={this.styles} id={this.custom.id}></div>
  }
}
</script>

<style lang="scss">
</style>