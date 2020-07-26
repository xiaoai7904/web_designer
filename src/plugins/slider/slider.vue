<script>
import pluginsMixins from '../pluginsMixins';
export default {
  name: 'xaSlider',

  mixins: [pluginsMixins],

  data() {
    return {
      value: '',
    }
  },

  watch: {
    'options.value': {
      handler() {
        this.value = this.options.value
      },
      immediate: true
    }
  },

  methods: {
    changeEvent(value) {
      this.eventFunctionHandler('change', value)
    },
    inputEvent(value) {
      this.eventFunctionHandler('input', value)
    },
    // 获取组件当前值
    getCurrentValue() {
      return this.value
    },
    // 设置组件当前值 
    setCurrentValue(value) {
      this.value = value
    },
  },

  render(h) {
    return <div class="xa-slider" style={this.styles}>
      <el-slider
        value={this.value}
        min={this.options.min}
        max={this.options.max}
        step={this.options.step}
        show-tooltip={this.options.showTooltip}
        disabled={this.options.disabled}
        vertical={this.options.vertical}
        on-change={this.changeEvent}
        on-input={this.inputEvent}
      ></el-slider>
    </div>
  }
}
</script>

<style lang="scss">
</style>
