<script>
export default {
  name: 'xaRate',
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
    return <div class="xa-rate" style={this.styles}>
      <el-rate
        value={this.options.value}
        disabled={this.options.disabled}
        max={this.options.max}
        allow-half={this.options.allowHalf}
      >
      </el-rate>
    </div>
  }
}
</script>

<style lang="scss">

</style>