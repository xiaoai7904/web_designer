<script>
export default {
  name: 'xaColorPicker',
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
    return <div class="xa-color-picker" style={this.styles}>
      <el-color-picker
        value={this.options.value}
        disabled={this.options.disabled}
        size={this.options.size}
        show-alpha={this.options.showAlpha}
        color-format={this.options.colorFormat}
      >
      </el-color-picker>
    </div>
  }
}
</script>

<style lang="scss">

</style>