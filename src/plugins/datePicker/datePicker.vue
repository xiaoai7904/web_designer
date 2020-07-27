<script>
import pluginsMixins from '../pluginsMixins';
export default {
  name: 'xaDatePicker',

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
    return <div class="xa-date-picker" style={this.styles}>
      <el-date-picker
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
      </el-date-picker>
    </div>
  }
}
</script>

<style lang="scss">
</style>