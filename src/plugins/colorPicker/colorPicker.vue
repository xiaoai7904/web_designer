<script>
import pluginsMixins from '../pluginsMixins';
export default {
  name: 'xaColorPicker',

  mixins: [pluginsMixins],

  methods: {
    changeEvent(color) {
      this.eventFunctionHandler('change', color)
    },
    activeChangeEvent(color) {
      this.eventFunctionHandler('activeChange', color)
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
        onChange={this.changeEvent}
        onActiveChange={this.activeChangeEvent}
      >
      </el-color-picker>
    </div>
  }
}
</script>

<style lang="scss">
</style>