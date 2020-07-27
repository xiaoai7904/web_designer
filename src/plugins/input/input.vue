<script>
import pluginsMixins from '../pluginsMixins';
export default {
  name: 'xaInput',

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
    blurEvent(event) {
      this.eventFunctionHandler('blur', event)
    },
    focusEvent(event) {
      this.eventFunctionHandler('focus', event)
    },
    changeEvent(value) {
      this.eventFunctionHandler('change', value)
    },
    inputEvent(value) {
      this.eventFunctionHandler('input', value)
    },
    clearEvent() {
      this.eventFunctionHandler('clear')
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

  computed: {
    styles() {
      return {
        width: '100%',
        height: '100%',
        fontSize: this.options.fontSize + 'px',
        color: this.options.fontColor,
        display: this.show ? 'block' : 'none',
      }
    }
  },

  render(h) {
    return <div class="xa-input" style={this.styles}>
      <el-input
        v-model={this.currentValue}
        placeholder={this.options.placeholder}
        type={this.options.type}
        size={this.options.size}
        clearable={this.options.clearable}
        disabled={this.options.disabled}
        readonly={this.options.readonly}
        maxlength={this.options.maxlength}
        prefix-icon={this.options.prefix}
        suffix-icon={this.options.suffix}
        search={this.options.search}
        enter-button={this.options.enterButton}
        rows={this.options.rows}
        autosize={this.options.autosize}
        number={this.options.number}
        autofocus={this.options.autofocus}
        autocomplete={this.options.autocomplete}
        on-blur={this.blurEvent}
        on-focus={this.focusEvent}
        on-change={this.changeEvent}
        on-input={this.inputEvent}
        on-clear={this.clearEvent}
      ></el-input>
    </div>
  }
}
</script>

<style lang="scss">
.xa-input {
  .el-input {
    width: 100%;
    height: 100%;
    font-size: inherit;
  }
  .el-input__inner {
    width: 100%;
    height: 100% !important;
    color: inherit;
  }
}
</style>
