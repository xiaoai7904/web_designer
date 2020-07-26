<script>
/* eslint-disable no-unused-vars */
import pluginsMixins from '../pluginsMixins';
export default {
  name: 'xaInputNumber',

  mixins: [pluginsMixins],

  data() {
    return {
      inputValue: '',
    }
  },

  watch: {
    'options.value': {
      handler() {
        this.inputValue = this.options.value
      },
      immediate: true
    }
  },

  methods: {
    blurEvent(event) {
      this.eventFunctionHandler('blur', event)
    },
    focusEvent(event) {
      this.eventFunctionHandler('focus', event)
    },
    changeEvent(value) {
      this.eventFunctionHandler('change', value)
    },
    // 获取组件当前值
    getCurrentValue() {
      return this.inputValue
    },
    // 设置组件当前值 
    setCurrentValue(value) {
      this.inputValue = value
    },
  },

  render(h) {
    return <div class="xa-input-number" style={this.styles}>
      <el-input-number
        class={this.options.controlsPosition === 'right' ? 'xa-input-number__isRight' : ''}
        value={this.inputValue}
        placeholder={this.options.placeholder}
        min={this.options.min}
        max={this.options.max}
        step={this.options.step}
        size={this.options.size}
        disabled={this.options.disabled}
        controls={this.options.controls}
        controls-position={this.options.controlsPosition}
        on-blur={this.blurEvent}
        on-focus={this.focusEvent}
        on-change={this.changeEvent}
      ></el-input-number>
    </div>
  }
}
</script>
<style lang="scss">
.xa-input-number {
  .el-input-number {
    width: 100%;
    height: 100%;
  }
  .el-input,
  .el-input__inner {
    height: 100% !important;
  }
  .el-input-number__decrease,
  .el-input-number__increase {
    height: calc(100% - 2px) !important;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__isRight {
    .el-input-number__decrease,
    .el-input-number__increase {
      height: 50% !important;
    }
  }
}
</style>