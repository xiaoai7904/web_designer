<script>
export default {
  name: 'xaBreadcrumb',
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
    return <div class="xa-breadcrumb" style={this.styles}>
      <el-breadcrumb separator={this.options.separator}>
        {this.options.children.map(item => {
          return <el-breadcrumb-item to={item.path}>{item.label}</el-breadcrumb-item>
        })}
      </el-breadcrumb>
    </div>
  }
}
</script>

<style lang="scss">
</style>
