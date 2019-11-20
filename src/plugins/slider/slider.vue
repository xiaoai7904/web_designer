<script>
export default {
  name: 'xaSlider',
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
    return <div class="xa-slider" style={this.styles}>
      <el-slider
        value={this.options.value}
        min={this.options.min}
        max={this.options.max}
        step={this.options.step}
        show-tooltip={this.options.showTooltip}
        disabled={this.options.disabled}
        vertical={this.options.vertical}
      ></el-slider>
    </div>
  }
}
</script>

<style lang="scss">

</style>
