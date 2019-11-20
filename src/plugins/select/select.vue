<script>
export default {
  name: 'xaSelect',
  props: {
    options: Object
  },
  methods: {},
  computed: {
    styles() {
      return {
        width: '100%',
        height: '100%'
      }
    }
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