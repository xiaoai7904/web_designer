<script>
export default {
  name: 'xaButton',
  props: {
    options: Object
  },
 
  computed: {
    styles() {
      return {
        width: '100%',
        height: '100%'
      }
    }
  },

  methods: {
    clickFn() {
      console.log('buttonClick')
    }
  },

  render(h) {
    return <div class="xa-button" style={this.styles}>
      <el-button
        disabled={this.options.disabled}
        type={this.options.type}
        round={this.options.round}
        plain={this.options.plain}
        circle={this.options.circle}
        size={this.options.size}
        onClick={this.clickFn}
      >
        {this.options.content}
      </el-button>
    </div>
  }
}
</script>

<style lang="scss">
.xa-button {
  .el-button {
    width: 100%;
    height: 100%;
  }
}
</style>