
<script>
import pluginChartsMixins from '../pluginChartsMixins';

// 折线图
export default {
  name: 'xaEchartsLine',

  mixins: [pluginChartsMixins],
  
  render(h) {
    return <div class="xa-echarts-line" style={this.styles} id={this.custom.id}></div>
  }
}
</script>

<style lang="scss">
</style>