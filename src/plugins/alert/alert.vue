<script>
import pluginsMixins from '../pluginsMixins';
export default {
  name: 'xaAlert',

  mixins: [pluginsMixins],

  data() {
    return {
      title: '',
      description: ''
    }
  },

  watch: {
    'options.title': {
      handler() {
        this.title = this.options.title
      },
      immediate: true
    },
    'options.description': {
      handler() {
        this.description = this.options.description
      },
      immediate: true
    },
  },

  methods: {
    closeEvent() {
      this.eventFunctionHandler('close')
    },
    setTitle(title) {
      this.title = title
    },
    setDescription(description) {
      this.description = description
    }
  },

  render(h) {
    return <div class="xa-alert" style={this.styles}>
      <el-alert
        type={this.options.type}
        title={this.title}
        description={this.description}
        closable={this.options.closable}
        center={this.options.center}
        close-text={this.options.closeText}
        show-icon={this.options.showIcon}
        effect={this.options.effect}
        onClose={this.closeEvent}
      ></el-alert>
    </div>
  }
}
</script>

<style lang="scss">
</style>
