<script>
import pluginsMixins from '../pluginsMixins';
export default {
  name: 'xaRate',

  mixins: [pluginsMixins],

  methods: {
    changeEvent() {
      this.eventFunctionHandler('change')
    }
  },

  render(h) {
    return <div class="xa-rate" style={this.styles}>
      <el-rate
        value={this.options.value}
        disabled={this.options.disabled}
        max={this.options.max}
        allow-half={this.options.allowHalf}
        onChange={this.changeEvent}
      >
      </el-rate>
    </div>
  }
}
</script>

<style lang="scss">
</style>