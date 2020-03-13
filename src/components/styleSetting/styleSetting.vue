<script>
import StyleSettingParamsEdit from './styleSettingParamsEdit';
import EchartBase from '@/modules/echartBase/echartBase.module';

export default {
  name: 'StyleSetting',

  props: {
    options: Object,
    type: String
  },

  components: { StyleSettingParamsEdit },

  computed: {
    echartsIns() {
      return new EchartBase()
    }
  },
  data() {
    return {}
  },

  mounted() {
    this.echartsIns.load(this.options, document.querySelector('.style-setting__chart'))
  },

  methods: {
    updateChartData(data) {
      this.echartsIns.setOption(data)
    },
    getValue() {
      return this.$refs.styleSettingParamsEditRef.getValue()
    }
  },
  render(h) {
    return <div class="style-setting">
      <StyleSettingParamsEdit ref="styleSettingParamsEditRef" type={this.type} chartData={this.options} class="style-setting__edit" onUpdateChart={this.updateChartData} />
      <div class="style-setting__chart"></div>
    </div>
  }
}
</script>

<style lang="scss">
.style-setting {
  display: flex;
  justify-content: space-between;
  &__edit {
    flex: 1;
  }
  &__chart {
    width: 500px;
    height: 400px;
    padding: 10px;
  }
}
.chart-style-setting {
  .el-dialog__body {
    padding: 0px;
    min-height: 80vh;
  }
  .el-dialog__header {
    border-bottom: 1px solid #bfbfbf;
  }
}
</style>