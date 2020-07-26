<script>
import pluginsMixins from '../pluginsMixins';
export default {
  name: 'xaDatePicker',

  mixins: [pluginsMixins],

  data() {
    return {
      dateValue: '',
    }
  },

  watch: {
    'options.value': {
      handler() {
        this.dateValue = this.options.value
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
      return this.dateValue
    },
    // 设置组件当前值 
    setCurrentValue(value) {
      this.dateValue = value
    },
  },

  render(h) {
    return <div class="xa-date-picker" style={this.styles}>
      <el-date-picker
        v-model={this.dateValue}
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