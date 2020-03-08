<script>
export default {
  name: 'xaHorizontalLayout',
  data() { return {} },
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
    return <div class="xa-horizontal-layout" style={this.styles}>
      {this.options.cols.length <= 24 && <el-row>
        {this.options.cols.map((item, index) => {
          return <el-col key={index} span={Math.floor(24 / this.options.cols.length)}>{index + 1}</el-col>
        })}
      </el-row>}
    </div>
  }
}
</script>

<style lang="scss">
.xa-horizontal-layout {
  .el-row {
    width: 100%;
    height: 100%;
  }
  .el-col {
    height: 100%;
    border-right: 1px dashed #eaeaea;
  }
}
</style>
