
<script>
import EchartsBase from '@/modules/echartBase/echartBase.module';
import { extend, throttle } from '@/modules/utils/utils'
import { isEqual } from 'lodash'

let _this = null

// 堆叠柱状图
export default {
  name: 'xaEchartsBarStack',

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
      this.echartsIns.load(extend(true, {}, this.options.chartConfig), document.querySelector('#' + this.custom.id), this.options.chartTheme)
    },
    resize: throttle(() => {
      _this.echartsIns.resize()
    }, 500)
  },
  render(h) {
    return <div class="xa-echarts-bar-stack" style={this.styles} id={this.custom.id}></div>
  }
}
</script>

<style lang="scss">
</style>