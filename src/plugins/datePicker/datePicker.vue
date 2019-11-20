<script>
export default {
  name: 'xaDatePicker',
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
    return <div class="xa-date-picker" style={this.styles}>
      <el-date-picker
        v-model={this.options.value}
        disabled={this.options.disabled}
        readonly={this.options.readonly}
        editable={this.options.editable}
        clearable={this.options.clearable}
        size={this.options.size}
      >
      </el-date-picker>
    </div>
  }
}
</script>

<style lang="scss">
</style>