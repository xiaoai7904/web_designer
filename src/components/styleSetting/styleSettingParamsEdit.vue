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
      currrntIndex: 0,
      rootTitleIndex: 0
    }
  },

  methods: {
    runCode() {
      let codeEditorRef = this.$refs.codeEditorRef
      let newCode = codeEditorRef.getValue()

      this.$emit('updateChart', newCode)
      this.currentChartModel = Object.assign({}, newCode)

      codeEditorRef.formatDocument()
    },
    getChartOptions(id) {
      let data = this.chartConfig.find(item => item.id === id)
      this.currentChartOptions = data ? data.children.slice() : []
    },
    updateChartModel(data) {
      this.modify(data.modify)
      this.$emit('updateChart', this.currentChartModel)
    },
    getValue() {
      if (this.rootTitleIndex === 0) return false
      return Object.assign({}, this.currentChartModel)
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
        <ul class="style-setting-params-edit__title1">
          <li class={this.rootTitleIndex === 0 ? "style-setting-params-edit__label style-setting-params-edit__check1" : "style-setting-params-edit__label"} onClick={() => this.rootTitleIndex = 0}>可视化配置{this.rootTitleIndex === 0 && <i class={this.currrntIndex === 0 ? "triangle triangle1" : "triangle"}></i>}</li>
          <li class={this.rootTitleIndex === 1 ? "style-setting-params-edit__label style-setting-params-edit__check1" : "style-setting-params-edit__label"} onClick={() => this.rootTitleIndex = 1}>代码编辑{this.rootTitleIndex === 1 && <i class="triangle triangle2"></i>}</li>
        </ul>
        {this.rootTitleIndex === 0 && <ul class="style-setting-params-edit__title">
          {
            this.chartConfig.map((item, index) => {
              return <li key={item.id} class={this.currrntIndex === index ? "style-setting-params-edit__label style-setting-params-edit__check" : "style-setting-params-edit__label"} onClick={() => { this.currrntIndex = index; this.getChartOptions(item.id) }}>{item.label}</li>
            })
          }
        </ul>}
        {this.rootTitleIndex === 0 && <div class="style-setting-params-edit__content">
          <PageFormView ref="pageFormViewRef" options={{ options: this.currentChartOptions, chartOptions: this.currentChartModel, labelWidth: '140px' }} onUpdateOptions={this.updateChartModel} />
        </div>}
        {this.rootTitleIndex === 1 && <div class="style-setting-params-edit__code">
          <div class="style-setting-params-edit-code__tools">
            <el-button size="mini" type="primary" onClick={this.runCode}>运行</el-button>
          </div>
          <CodeEditor class="style-setting-params-edit-code__wrap" ref="codeEditorRef" codeContent={JSON.stringify(this.currentChartModel)} language="json" type="[object Object]" />
        </div>}
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
    min-height: 80vh;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
  }
  &__tanpane {
    display: flex;
    justify-content: flex-start;
  }
  &__title1 {
    background: #2c3e50; // #2983bb;
    list-style: none;
    padding: 0;
    margin: 0;
    color: #fff;
    width: 80px;
    overflow: auto;
    height: 80vh;
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
    position: relative;
    &:hover {
      cursor: pointer;
    }
  }
  &__code {
    flex: 1;
  }
  &-code__tools {
    width: 100%;
    height: 30px;
    background: #fff;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  }
  &-code__wrap {
    height: calc(80vh - 30px);
  }
  &__check {
    background: #e0f8ed; // #e5f8ff;
    color: #2c3e50;
  }
  .triangle {
    width: 0;
    height: 0;
    border: 7px solid transparent;
    border-right: 7px solid $--color-primary;
    position: absolute;
    top: 35%;
    right: 0;
  }
  .triangle1 {
    border-right: 7px solid #e0f8ed !important;
  }
  .triangle2 {
    border-right: 7px solid #1e1e1e !important;
  }
}
</style>