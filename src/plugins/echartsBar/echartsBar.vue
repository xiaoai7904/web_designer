
<script>
import pluginChartsMixins from '../pluginChartsMixins';

// 柱状图
export default {
  name: 'xaEchartsBar',

  mixins: [pluginChartsMixins],

  render(h) {
    return <div class="xa-echarts-bar" style={this.styles} id={this.custom.id}></div>
  }
}
</script>

<style lang="scss">
</style>