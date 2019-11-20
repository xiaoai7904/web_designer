<script>
export default {
  name: 'xaTimePicker',
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
    return <div class="xa-time-picker" style={this.styles}>
      <el-time-picker
        v-model={this.options.value}
        disabled={this.options.disabled}
        readonly={this.options.readonly}
        editable={this.options.editable}
        clearable={this.options.clearable}
        size={this.options.size}
      >
      </el-time-picker>
    </div>
  }
}
</script>

<style lang="scss">
</style>