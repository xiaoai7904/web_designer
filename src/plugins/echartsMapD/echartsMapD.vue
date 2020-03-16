
<script>
import EchartsBase from '@/modules/echartBase/echartBase.module';
import { extend, throttle } from '@/modules/utils/utils'
import { isEqual } from 'lodash'
let _this = null
const baseTexture = require('./images/earth.jpg')
const heightTexture = require('./images/bathymetry_bw_composite_4k.jpg')
const environment = require('./images/starfield.jpg')
const texture = require('./images/night.jpg')
const texture1 = require('./images/clouds.png')
// 3d地图
export default {
  name: 'xaEchartsMapD',

  props: {
    options: Object,
    custom: {
      type: Object,
      default() {
        return {}
      }
    }
  },

  data() {
    return {
    }
  },
  methods: {},

  computed: {
    styles() {
      return {
        width: this.custom.width + 'px',
        height: this.custom.height + 'px'
      }
    },
    echartsIns() {
      return new EchartsBase()
    }
  },

  watch: {
    'options.chartConfig': {
      handler(newValue, oldValue) {
        if (!isEqual(newValue, oldValue)) {
          this.echartsIns.setOption(newValue)
        }
      },
      deep: true,
    },
    'custom.width': {
      handler() {
        this.resize()
      },
    },
    'custom.height': {
      handler() {
        this.resize()
      },
    }
  },

  mounted() {
    _this = this
    this.$nextTick(() => {
      this.init()
    })

  },
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
    resize: throttle(() => {
      _this.echartsIns.resize()
    }, 500),

  },
  render(h) {
    return <div class="xa-echarts-mapd" style={this.styles} id={this.custom.id}></div>
  }
}
</script>

<style lang="scss">
</style>