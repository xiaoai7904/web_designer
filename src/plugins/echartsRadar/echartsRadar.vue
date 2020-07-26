
<script>
import pluginChartsMixins from '../pluginChartsMixins';
// 雷达图
export default {
  name: 'xaEchartsRadar',

 mixins: [pluginChartsMixins],

  render(h) {
    return <div class="xa-echarts-radar" style={this.styles} id={this.custom.id}></div>
  }
}
</script>

<style lang="scss">
</style>