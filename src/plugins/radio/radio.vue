<script>
import pluginsMixins from '../pluginsMixins';
export default {
  name: 'xaRadio',

  mixins: [pluginsMixins],

  methods: {
    changeEvent() {
      this.eventFunctionHandler('change')
    }
  },

  render(h) {
    return <div class="xa-radio">
      <el-radio-group
        value={this.options.value}
        disabled={this.options.disabled}
        size={this.options.size}
        text-color={this.options.textColor}
        fill={this.options.fill}
        onChange={this.changeEvent}
      >
        {this.options.buttomStyle && this.options.children.map(item => {
          return <el-radio-button label={item.value} disabled={item.disabled}>{item.label}</el-radio-button>
        })}
        {!this.options.buttomStyle && this.options.children.map(item => {
          return <el-radio label={item.value} border={this.options.border}  disabled={item.disabled}>{item.label}</el-radio>
        })}
      </el-radio-group>
    </div>
  }
}
</script>