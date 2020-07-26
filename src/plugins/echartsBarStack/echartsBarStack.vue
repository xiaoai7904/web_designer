
<script>
import pluginChartsMixins from '../pluginChartsMixins';

// 堆叠柱状图
export default {
  name: 'xaEchartsBarStack',

  mixins: [pluginChartsMixins],

  render(h) {
    return <div class="xa-echarts-bar-stack" style={this.styles} id={this.custom.id}></div>
  }
}
</script>

<style lang="scss">
</style>