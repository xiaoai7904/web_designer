
<script>
import pluginChartsMixins from '../pluginChartsMixins';
// 3D 曲面
export default {
  name: 'xaEchartsSurfaceD',

  mixins: [pluginChartsMixins],

  render(h) {
    return <div class="xa-echarts-surface-d" style={this.styles} id={this.custom.id}></div>
  }
}
</script>

<style lang="scss">
</style>