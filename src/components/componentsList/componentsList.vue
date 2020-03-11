<script>
import Vue from 'vue';
import Component from 'vue-class-component';
// import Configuration from '@/modules/configuration/configuration'
import { uuid } from '@/modules/utils/utils'

@Component({
  props: {
    options: {
      type: Array,
      default() {
        return []
      }
    }
  }
})
class ComponentsList extends Vue {
  // componentsList = new Configuration().getDefaultConfig()

  createComponentsItem(h) {
    let items = []

    items = this.options.map(item => {
      return this.createRoot(h, item.key, item.custom.name, h('i', { class: ['iconfont', item.custom.iconname] }))
    })
    return items
  }
  createRoot(h, componentsName, titleName, children) {
    return <div
      id={`${componentsName}_${uuid()}`}
      class="components-list-item"
      draggable
      onDragover={this.dragover}
      onDragstart={this.dragstart}>
      {children}
      <span class="components-list-item__des">{titleName}</span>
    </div>
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
    return <div id="ui-designer-components-list" class="components-list">{this.createComponentsItem(h)}</div>
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
      color: #636363;
    }
    &:hover,
    &:hover .components-list-item__des {
      background-color: #f3f3f3;
      cursor: move;
      color: $--color-primary;
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
