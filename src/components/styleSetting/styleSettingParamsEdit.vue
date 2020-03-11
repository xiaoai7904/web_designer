<script>
import PageFormView from '@/components/pageFormView/pageFormView';
import styleSettingConfig from '@/components/styleSetting/styleSettingConfig';

export default {
  name: 'StyleSettingParamsEdit',

  components: { PageFormView },

  props: {
    type: String,
    chartData: {
      type: Object,
      default() {
        return {}
      }
    }
  },

  watch: {
    type: {
      handler() {
        this.chartConfig = styleSettingConfig[`${this.type}Config`].slice()
        this.currentChartOptions = this.chartConfig[0].children.slice()
      },
      immediate: true
    },
    chartData: {
      handler() {
        this.currentChartModel = Object.assign({}, this.chartData)
      },
      deep: true,
      immediate: true
    }
  },


  data() {
    return {
      chartConfig: [],
      currentChartModel: {},
      currentChartOptions: [],
      currrntIndex: 0
    }
  },

  methods: {
    getChartOptions(id) {
      let data = this.chartConfig.find(item => item.id === id)
      this.currentChartOptions = data ? data.children.slice() : []
    },
    updateChartModel(data) {
      this.modify(data.modify)
      this.$emit('updateChart', this.currentChartModel)
    },
    modify(modifyData) {
      let orgData = { chartOptions: this.currentChartModel }
      let ary = modifyData.id.match(/\w+|\d+/g);
      let last = ary.pop();

      let obj = ary.reduce((a, b) => {
        return a[b];
      }, orgData);

      if (obj) {
        obj[last] = modifyData.value;
      }
    }
  },

  render(h) {
    return <div class="style-setting-params-edit">

      <div class="style-setting-params-edit__wrap">
        <ul class="style-setting-params-edit__title">
          {
            this.chartConfig.map((item, index) => {
              return <li key={item.id} class={this.currrntIndex === index ? "style-setting-params-edit__label style-setting-params-edit__check" : "style-setting-params-edit__label"} onClick={() => { this.currrntIndex = index; this.getChartOptions(item.id) }}>{item.label}</li>
            })
          }
        </ul>
        <div class="style-setting-params-edit__content">
          <PageFormView options={{ options: this.currentChartOptions, chartOptions: this.currentChartModel, labelWidth: '140px' }} onUpdateOptions={this.updateChartModel} />
        </div>
      </div>

    </div>
  }

}
</script>

<style lang="scss">
.style-setting-params-edit {
  &__wrap {
    display: flex;
    justify-content: flex-start;
    // border-right: 1px solid #e4e4e4;
    min-height: 80vh;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
  }
  &__title {
    list-style: none;
    padding: 0;
    margin: 0;
    background: $--color-primary; // #2983bb;
    color: #fff;
    width: 80px;
    overflow: auto;
    height: 80vh;
  }
  &__content {
    background: #e0f8ed; // #e5f8ff;
    flex: 1;
    padding: 0 20px;
    overflow: auto;
    height: 80vh;
    .el-form-item__content {
      height: 40px;
    }
  }
  &__label {
    padding: 10px 5px;
    font-size: 13px;
    text-align: center;
    &:hover {
      cursor: pointer;
    }
  }
  &__check {
    background: #e0f8ed; // #e5f8ff;
    color: #2c3e50;
  }
}
</style>