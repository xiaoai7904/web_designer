
<script>
import pluginChartsMixins from '../pluginChartsMixins';

// 3D折线图
export default {
  name: 'xaEchartsLineD',

  mixins: [pluginChartsMixins],

  render(h) {
    return <div class="xa-echarts-line-d" style={this.styles} id={this.custom.id}></div>
  }
}
</script>

<style lang="scss">
</style>