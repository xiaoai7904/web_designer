
<script>
import pluginChartsMixins from '../pluginChartsMixins';

// 漏斗图
export default {
  name: 'xaEchartsFunnel',

  mixins: [pluginChartsMixins],

  render(h) {
    return <div class="xa-echarts-funnel" style={this.styles} id={this.custom.id}></div>
  }
}
</script>

<style lang="scss">
</style>