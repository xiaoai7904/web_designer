<script>
/* eslint-disable no-unused-vars */
export default {
  name: 'xaInputNumber',
  data() { return {} },
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
    return <div class="xa-input-number" style={this.styles}>
      <el-input-number
        class={this.options.controlsPosition === 'right' ? 'xa-input-number__isRight' : ''}
        value={this.options.value}
        placeholder={this.options.placeholder}
        min={this.options.min}
        max={this.options.max}
        step={this.options.step}
        size={this.options.size}
        disabled={this.options.disabled}
        controls={this.options.controls}
        controls-position={this.options.controlsPosition}
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