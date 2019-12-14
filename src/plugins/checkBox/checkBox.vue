<script>
export default {
  name: 'xaCheckBox',
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
    return <div class="xa-checkbox">
      <el-checkbox-group
        value={this.options.value}
        disabled={this.options.disabled}
        size={this.options.size}
        min={this.options.min}
        max={this.options.max}
        text-color={this.options.textColor}
        fill={this.options.fill}
      >
        {this.options.buttomStyle && this.options.children.map(item => {
          return <el-checkbox-button label={item.value} disabled={item.disabled}>{item.label}</el-checkbox-button>
        })}
        {!this.options.buttomStyle && this.options.children.map(item => {
          return <el-checkbox label={item.value} border={this.options.border}  disabled={item.disabled}>{item.label}</el-checkbox>
        })}
      </el-checkbox-group>
    </div>
  }
}
</script>