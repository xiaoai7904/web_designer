<script>
import pluginsMixins from '../pluginsMixins';
export default {
  name: 'xaSelect',

  mixins: [pluginsMixins],

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
    visibleChangeEvent(value) {
      this.eventFunctionHandler('visibleChange', value)
    },
    removeTagEvent(value) {
      this.eventFunctionHandler('removeTag', value)
    },
    clearEvent() {
      this.eventFunctionHandler('clear')
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
    return <div class="xa-select" style={this.styles}>
      <el-select
        value={this.options.value}
        disabled={this.options.disabled}
        placeholder={this.options.placeholder}
        size={this.options.size}
        multiple={this.options.multiple}
        clearable={this.options.clearable}
        multiple-limit={this.options.multipleLimit}
        onChange={this.changeEvent}
        onVisibleChange={this.visibleChangeEvent}
        onRemoveTag={this.removeTagEvent}
        on-blur={this.blurEvent}
        on-focus={this.focusEvent}
        on-clear={this.clearEvent}
      >
        {this.options.children.map(item => {
          return <el-option label={item.label} value={item.value} disabled={item.disabled} />
        })}
      </el-select>
    </div>
  }
}
</script>

<style lang="scss">
.xa-select {
  .el-select {
    width: 100%;
    height: 100%;
    .el-input {
      width: 100%;
      height: 100%;
      .el-input__inner {
        height: 100%;
      }
    }
  }
}
</style>