<script>
export default {
  name: 'xaProgress',
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
    return <div class="xa-progress" style={this.styles}>
      <el-progress
        percentage={this.options.percentage}
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
