<script>
import pluginsMixins from '../pluginsMixins';
import PageSwitch from './pageSwitch';

export default {
  name: 'xaSwitch',

  mixins: [pluginsMixins],

  components: { PageSwitch },

  methods: {
    changeEvent(value) {
      this.eventFunctionHandler('change', value)
    },
  },

  render(h) {
    return <div class="xa-switch" style={this.styles}>
      <page-switch
        value={this.options.value}
        disabled={this.options.disabled}
        width={this.options.width}
        activeText={this.options.activeText}
        inactiveText={this.options.inactiveText}
        activeColor={this.options.activeColor}
        inactiveColor={this.options.inactiveColor}
        onChange={this.changeEvent}
      ></page-switch>
    </div>
  }
}
</script>

<style lang="scss">
.xa-switch {
  width: 100%;
  height: 100%;
  .el-switch {
    width: 100%;
    height: 100%;
  }
  .el-switch__core {
    width: 100% !important;
  }
}
.page-switch {
  .el-switch__core {
    color: #fff;
    font-size: 12px;
    line-height: 18px;
  }
  .el-switch__actived {
    text-align: left;
    padding-left: 5px;
  }
  .el-switch__inactive {
    text-align: right;
    padding-right: 5px;
  }
}
</style>
