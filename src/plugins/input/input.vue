<script>
export default {
  name: 'xaInput',

  data() {
    return {
      inputValue: ''
    }
  },

  props: {
    options: Object,
    custom: {
      type: Object,
      default() {
        return {
          eventListener: {}
        }
      }
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
      this.custom.eventListener.blur && this.custom.eventListener.blur(event)
    },
    focusEvent(event) {
      this.custom.eventListener.focus && this.custom.eventListener.focus(event)
    },
    changEvent(value) {
      this.custom.eventListener.chang && this.custom.eventListener.chang(value)
    },
    inputEvent(value) {
      this.custom.eventListener.input && this.custom.eventListener.input(value)
    },
    clearEvent() {
      this.custom.eventListener.clear && this.custom.eventListener.clear()
    },
  },

  computed: {
    styles() {
      return {
        width: '100%',
        height: '100%',
        fontSize: this.options.fontSize + 'px',
        color: this.options.fontColor
      }
    }
  },
  created() {
    this.custom.eventListener.created && this.custom.eventListener.created()
  },
  mounted() {
    this.custom.eventListener.mounted && this.custom.eventListener.mounted()
  },
  render(h) {
    return <div class="xa-input" style={this.styles}>
      <el-input
        v-model={this.inputValue}
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
        on-change={this.changEvent}
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
