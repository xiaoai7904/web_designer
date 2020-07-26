
<script>
import pluginChartsMixins from '../pluginChartsMixins';
// 树图
export default {
  name: 'xaEchartsTree',

  mixins: [pluginChartsMixins],
  
  render(h) {
    return <div class="xa-echarts-tree" style={this.styles} id={this.custom.id}></div>
  }
}
</script>

<style lang="scss">
</style>