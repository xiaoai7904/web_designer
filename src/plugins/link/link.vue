<script>
export default {
  name: 'xaLink',
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
    return <div class="xa-link" style={this.styles}>
      <el-link
        disabled={this.options.disabled}
        type={this.options.type}
        underline={this.options.underline}
        href={this.options.href}
      >
        {this.options.content}
      </el-link>
    </div>
  }
}
</script>

<style lang="scss">

</style>