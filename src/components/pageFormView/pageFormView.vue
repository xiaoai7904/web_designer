<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import { State, Mutation } from 'vuex-class'
import { Watch, Prop } from '@/modules/vuePropertyDecorator/vuePropertyDecorator'
import { createItem } from './builtin'
@Component({})
export default class PageFormView extends Vue {
  @Prop(Object) options

  @Watch('options', { deep: true, immediate: true })
  updateOptionsFn(newValue) {
    // console.log(newValue)
    this.createModel()
    this.createRules()
  }

  formMode = {}
  formRules = {}

  createRules() { }
  createModel() {
    if (Object.keys(this.options).length) {
      let _model = { props: this.options.props, style: this.options.style, custom: this.options.custom }
      this.formMode = Object.assign({}, _model)
    }
  }
  createFormItem(h) {
    if (Object.keys(this.options).length) {
      return this.options.options.map(item => {
        if (item.type === 'title' || item.type === 'tips') {
          return createItem(h, item, this)
        }
        return <el-form-item label={item.label + ': '} prop={item.id}>
          {createItem(h, item, this)}
        </el-form-item>
      })
    }
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
    // Tips: 注释的代码运行会报 Invalid handler for event "input": got undefined 暂不知道原因，感觉是jsx配置不对...

    // if (this.currentPlugins.length) {
    //   return <div class="attributs-setting">
    //     <el-form ref="formComponent" model={this.formMode} rules={this.formRules} label-width="80">{this.createFormItem(h)}</el-form>
    //   </div>
    // }
    if (Object.keys(this.options).length) {
      return h('div', {
        class: ['attributs-setting']
      }, [
          h('el-form', {
            props: {
              model: this.formMode,
              rules: this.formRules,
              'label-width': '80px'
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
    border-bottom: 2px solid #42b983;
    font-size: 14px;
    font-weight: 900;
    margin-bottom: 10px;
  }
  &__tips {
    display: inline-block;
    width: 100%;
    border-bottom: 2px solid #42b983;
    font-size: 12px;
    margin-bottom: 10px;
    color: #848484;
  }
  .el-form-item {
    margin-bottom: 10px;
  }
  .el-select,
  .el-input-number {
    width: 100%;
  }
}
</style>
