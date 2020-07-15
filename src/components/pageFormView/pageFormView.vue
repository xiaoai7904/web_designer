<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import PageSwitch from '@/components/pageSwitch/pageSwitch'
import CodeEditor from '@/components/codeEditor/codeEditor'
import { State, Mutation } from 'vuex-class'
import { Watch, Prop } from '@/modules/vuePropertyDecorator/vuePropertyDecorator'
import { createItem } from './builtin'
@Component({
  components: { PageSwitch, CodeEditor }
})
export default class PageFormView extends Vue {
  @Prop(Object) options
  @Prop(Object) model

  @Watch('options', { deep: true, immediate: true })
  updateOptionsFn(newValue) {
    // console.log(newValue)
    this.createModel()
    this.createRules()
  }

  formMode = {}
  formRules = {}
  currentIcons = ''
  currentCodeContent = ''

  createRules() { }
  createModel() {
    if (Object.keys(this.options).length) {
      let _model = { props: this.options.props, style: this.options.style, custom: this.options.custom, children: this.options.children, chartOptions: this.options.chartOptions }
      this.formMode = Object.assign({}, _model)
    }
  }
  createFormItem(h) {
    if (Object.keys(this.options).length) {
      return this.options.options.map(item => {
        try {
          if (item.hidden && typeof item.hidden === 'function' && item.hidden()) {
            return ''
          }
          if (item.hidden) {
            return ''
          }
          if (item.type === 'title' || item.type === 'tips' || !item.label) {
            return createItem(h, item, this)
          }
          return <el-form-item label={item.label + ': '} prop={item.id}>
            {createItem(h, item, this)}
          </el-form-item>
        } catch (error) {
          return ''
        }
      })
    }
  }
  updateFormMode(_model) {
    this.formMode = Object.assign({}, this.formMode, _model)
  }
  handlerData(id, type) {
    const _this = this
    const handlerType = {
      getData(id) {
        let value = id.match(/\w+|\d+/g).reduce((a, b) => {
          if (a && a[b] !== void 0) {
            return a[b];
          }
        }, _this.formMode);

        return value
      },
      setData(data) {
        if (this.getData(data.id) !== data.value) {
          _this.$emit('updateOptions', { id: _this.options.id, modify: data })
        }
      }
    }
    return handlerType[`${type}Data`](id)
  }

  mounted() {

  }
  render(h) {
    if (Object.keys(this.options).length) {
      return h('div', {
        class: ['attributs-setting']
      }, [
        h('el-form', {
          props: {
            model: this.formMode,
            rules: this.formRules,
            'label-width': this.options.labelWidth || '90px'
          }
        }, this.createFormItem(h))
      ])
    }
    return <span>暂无数据</span>
  }
}
</script>

<style lang="scss">
.attributs-setting {
  &__title {
    display: inline-block;
    width: 100%;
    border-bottom: 2px solid $--color-primary;
    font-size: 12px;
    font-weight: 900;
    margin-bottom: 10px;
  }
  &__tips {
    display: inline-block;
    width: 100%;
    border-bottom: 2px solid $--color-primary;
    font-size: 12px;
    margin-bottom: 10px;
    color: #848484;
  }
  &__icons {
    border: 1px solid $--color-primary;
    width: 40px;
    height: 40px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      border-style: dashed;
      color: $--color-primary;
    }
  }
  .el-form-item {
    margin-bottom: 5px;
  }
  .el-select,
  .el-input-number {
    width: 100%;
  }
  .el-form-item__label {
    font-size: 12px;
  }
}

.code-dialog {
  background-color: rgb(28, 31, 37) !important;
  .el-dialog__header {
    background-color: rgb(28, 31, 37) !important;
    border-bottom: 1px solid #3a3939 !important;
  }
  .el-dialog__title {
    color: #fff;
  }
  .el-dialog__body {
    height: 80vh;
    box-sizing: border-box;
    padding: 0;
  }
  .el-dialog__footer {
    border-top: 1px solid #3a3939 !important;
    .el-button--default {
      background: #4a4949;
      border-color: #4a4949;
      color: #fff;
    }
    .el-button--primary {
      background-color: #569bd5;
      border-color: #569bd5;
    }
  }
}
</style>
