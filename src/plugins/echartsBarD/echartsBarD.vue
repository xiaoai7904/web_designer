
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

  render(h) {
    return <div class="xa-echarts-bar-3d" style={this.styles} id={this.custom.id}></div>
  }
}
</script>

<style lang="scss">
</style>