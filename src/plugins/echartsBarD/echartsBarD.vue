
<script>
import pluginChartsMixins from '../pluginChartsMixins';
// import EchartsBase from '@/modules/echartBase/echartBase.module';
// import { extend, throttle } from '@/modules/utils/utils'
// import { isEqual } from 'lodash'

// let _this = null

// 柱状3D图
export default {
  name: 'xaEchartsBarD',

  mixins: [pluginChartsMixins],

  // methods: {},

  // computed: {
  //   styles() {
  //     return {
  //       width: this.custom.width + 'px',
  //       height: this.custom.height + 'px',
  //       display: this.show ? 'block' : 'none',
  //     }
  //   },
  //   echartsIns() {
  //     return new EchartsBase()
  //   }
  // },

  // watch: {
  //   'options.chartConfig': {
  //     handler(newValue, oldValue) {
  //       if (!isEqual(newValue, oldValue)) {
  //         this.echartsIns.setOption(newValue)
  //       }
  //     },
  //     deep: true,
  //   },
  //   'custom.width': {
  //     handler() {
  //       this.resize()
  //     },
  //   },
  //   'custom.height': {
  //     handler() {
  //       this.resize()
  //     },
  //   }
  // },

  // mounted() {
  //   _this = this
  //   this.$nextTick(() => {
  //     this.init()
  //   })

  // },
  // methods: {
  //   init() {
  //     this.echartsIns.load(extend(true, {}, this.options.chartConfig), document.querySelector('#' + this.custom.id), this.options.chartTheme)
  //   },
  //   resize: throttle(() => {
  //     _this.echartsIns.resize()
  //   }, 500)
  // },
  render(h) {
    return <div class="xa-echarts-bar-3d" style={this.styles} id={this.custom.id}></div>
  }
}
</script>

<style lang="scss">
</style>