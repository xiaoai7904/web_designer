<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import Configuration from '@/modules/configuration/configuration'
import { uuid } from '@/modules/utils/utils'

@Component({})
class ComponentsList extends Vue {
  componentsList = new Configuration().getDefaultConfig()

  createComponentsItem(h) {
    let items = []

    items = this.componentsList.map(item => {
      return this.createRoot(h, item.key, item.custom.name, h('i', { class: ['iconfont', item.custom.iconname] }))
    })
    return items
  }
  createRoot(h, componentsName, titleName, children) {
    return h('div', { class: ['components-list-item'], attrs: { draggable: true, id: `${componentsName}_${uuid()}` }, on: { dragover: this.dragover, dragstart: this.dragstart } }, [children, h('span', { class: ['components-list-item__des'] }, titleName)])
    // return h('div', { class: ['components-list-item'], attrs: { draggable: true, id: `${componentsName}_${uuid()}` }, on: { dragover: this.dragover, dragstart: this.dragstart } }, [this.createTitle(h, { name: titleName }), children])
  }
  createTitle(h, data) {
    return h('div', { class: ['components-list-item__title'] }, data.name)
  }
  detectCreateElementParams(obj) {
    let _params = {}
    let orgParams = ['class', 'style', 'attrs', 'props', 'domProps', 'on', 'nativeOn', 'directives', 'scopedSlots', 'slot', 'key', 'ref', 'refInFor']

    orgParams.map(item => obj[item] && (_params[item] = obj[item]))

    return Object.assign({}, _params)
  }
  dragstart(event) {
    event.dataTransfer.setData('componentsId', event.target.id)
  }
  dragover(event) {
    event.preventDefault()
  }
  render(h) {
    return h('div', { class: ['components-list'], attrs: { id: 'ui-designer-components-list' } }, this.createComponentsItem(h))
  }
}
export default ComponentsList
</script>

<style lang="scss">
.components-list {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  // padding: 0 4px;
  &-item {
    margin-bottom: 1px;
    outline: 1px solid #dcdee2;
    overflow: hidden;
    width: 62px;
    height: 55px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin-left: 1px;
    &__title {
      border-bottom: 1px solid #dcdee2;
      margin-bottom: 10px;
      font-size: 13px;
      font-weight: 600;
      padding: 3px 0px;
      &:hover {
        cursor: move;
      }
    }
    &__des {
      font-size: 12px;
      margin-top: 5px;
      line-height: initial;
    }
    &:hover {
      background-color: #ececec;
      cursor: move;
    }
  }
  .iconfont {
    font-size: 24px;
    line-height: initial;
  }
}
#ui-designer-components-list {
  .el-input__inner {
    height: auto !important;
  }
}
</style>
