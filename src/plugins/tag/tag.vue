<script>
export default {
  name: 'xaTag',
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
    return <div class="xa-tag" style={this.styles}>
      <el-tag
        type={this.options.type}
        closable={this.options.closable}
        hit={this.options.hit}
        color={this.options.color}
        size={this.options.size}
      >{this.options.value}</el-tag>
    </div>
  }
}
</script>

<style lang="scss">

</style>
