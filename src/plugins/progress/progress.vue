<script>
import pluginsMixins from '../pluginsMixins';
export default {
  name: 'xaProgress',

  mixins: [pluginsMixins],

  data() {
    return {
      percentage: 50,
    }
  },

  watch: {
    'options.percentage': {
      handler() {
        this.percentage = this.options.percentage
      },
      immediate: true
    }
  },

  methods: {
    // 获取组件当前值
    getCurrentValue() {
      return this.percentage
    },
    // 设置组件当前值 
    setCurrentValue(value) {
      this.percentage = value
    },
  },

  render(h) {
    return <div class="xa-progress" style={this.styles}>
      <el-progress
        percentage={this.percentage}
        type={this.options.type}
        stroke-width={this.options.strokeWidth}
        show-text={this.options.showText}
        status={this.options.status}
        color={this.options.color}
        width={this.options.width}
      >{this.options.status === 'text' ? this.options.percentage + '%' : ''}</el-progress>
    </div>
  }
}
</script>

<style lang="scss">
</style>
