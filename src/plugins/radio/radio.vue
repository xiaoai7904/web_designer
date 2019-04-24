<script>
export default {
  name: 'xaRadio',
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
    return <div class="xa-radio">
      <el-radio-group
        value={this.options.value}
        disabled={this.options.disabled}
        size={this.options.size}
        text-color={this.options.textColor}
        fill={this.options.fill}
      >
        {this.options.buttomStyle && this.options.children.map(item => {
          return <el-radio-button label={item.value}>{item.label}</el-radio-button>
        })}
        {!this.options.buttomStyle && this.options.children.map(item => {
          return <el-radio label={item.value} border={this.options.border}>{item.label}</el-radio>
        })}
      </el-radio-group>
    </div>
  }
}
</script>