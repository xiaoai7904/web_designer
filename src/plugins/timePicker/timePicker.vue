<script>
import pluginsMixins from '../pluginsMixins';
export default {
  name: 'xaTimePicker',

  mixins: [pluginsMixins],

  data() {
    return {
      currentValue: '',
    }
  },

  watch: {
    'options.value': {
      handler() {
        this.currentValue = this.options.value
      },
      immediate: true
    }
  },

  methods: {
    blurEvent() {
      this.eventFunctionHandler('blur')
    },
    focusEvent() {
      this.eventFunctionHandler('focus')
    },
    changeEvent(value) {
      this.eventFunctionHandler('chang', value)
    },
    // 获取组件当前值
    getCurrentValue() {
      return this.currentValue
    },
    // 设置组件当前值 
    setCurrentValue(value) {
      this.currentValue = value
    },
  },
  
  render(h) {
    return <div class="xa-time-picker" style={this.styles}>
      <el-time-picker
        v-model={this.currentValue}
        disabled={this.options.disabled}
        readonly={this.options.readonly}
        editable={this.options.editable}
        clearable={this.options.clearable}
        size={this.options.size}
        onChange={this.changeEvent}
        onBlur={this.blurEvent}
        onFocus={this.focusEvent}
      >
      </el-time-picker>
    </div>
  }
}
</script>

<style lang="scss">
</style>