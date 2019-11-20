<script>
export default {
  name: 'xaAlert',
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
    return <div class="xa-alert" style={this.styles}>
      <el-alert
        type={this.options.type}
        title={this.options.title}
        description={this.options.description}
        closable={this.options.closable}
        center={this.options.center}
        close-text={this.options.closeText}
        show-icon={this.options.showIcon}
        effect={this.options.effect}
      ></el-alert>
    </div>
  }
}
</script>

<style lang="scss">
</style>
