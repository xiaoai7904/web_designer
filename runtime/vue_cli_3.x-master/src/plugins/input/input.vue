<script>
export default {
  name: 'xaInput',
  data() { return {} },
  props: {
    options: Object
  },
  methods: {},
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
  render(h) {
    return <div class="xa-input" style={this.styles}>
      <el-input
        value={this.options.value}
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
