
<script>
import pluginChartsMixins from '../pluginChartsMixins';
const baseTexture = require('./images/earth.jpg')
const heightTexture = require('./images/bathymetry_bw_composite_4k.jpg')
const environment = require('./images/starfield.jpg')
const texture = require('./images/night.jpg')
const texture1 = require('./images/clouds.png')
// 3d地图
export default {
  name: 'xaEchartsMapD',

  mixins: [pluginChartsMixins],

  methods: {
    init() {
      this.echartsIns.load({
        backgroundColor: '#000',
        globe: {
          baseTexture,
          heightTexture,

          displacementScale: 0.1,

          shading: 'lambert',

          environment,

          light: {
            ambient: {
              intensity: 0.1
            },
            main: {
              intensity: 1.5
            }
          },

          layers: [{
            type: 'blend',
            blendTo: 'emission',
            texture
          }, {
            type: 'overlay',
            texture: texture1,
            shading: 'lambert',
            distance: 5
          }]
        },
        series: []
      }, document.querySelector('#' + this.custom.id), this.options.chartTheme)
    },

  },
  render(h) {
    return <div class="xa-echarts-mapd" style={this.styles} id={this.custom.id}></div>
  }
}
</script>

<style lang="scss">
</style>