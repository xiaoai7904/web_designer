
<script>
import pluginChartsMixins from '../pluginChartsMixins';
import chinaJson from './china.json'

// 地图
export default {
  name: 'xaEchartsMap',

  mixins: [pluginChartsMixins],

  methods: {
    init() {
      this.echartsBase.registerMap(chinaJson)
      this.echartsBase.load({
        series: [{
          type: 'map',
          map: 'china'
        }]
      }, document.querySelector('#' + this.custom.id), this.options.chartTheme)
    },

  },
  render(h) {
    return <div class="xa-echarts-map" style={this.styles} id={this.custom.id}></div>
  }
}
</script>

<style lang="scss">
</style>