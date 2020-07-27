<script>
import pluginsMixins from '../pluginsMixins';
export default {
  name: 'xaProgress',

  mixins: [pluginsMixins],

  data() {
    return {
      currentValue: 50,
    }
  },

  watch: {
    'options.percentage': {
      handler() {
        this.currentValue = this.options.percentage
      },
      immediate: true
    }
  },

  methods: {
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
    return <div class="xa-progress" style={this.styles}>
      <el-progress
        percentage={this.currentValue}
        type={this.options.type}
        stroke-width={this.options.strokeWidth}
        show-text={this.options.showText}
        status={this.options.status}
        color={this.options.color}
        width={this.options.width}
      >{this.options.status === 'text' ? this.currentValue + '%' : ''}</el-progress>
    </div>
  }
}
</script>

<style lang="scss">
</style>
