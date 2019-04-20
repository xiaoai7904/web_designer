import Vue from 'vue';
import Component from 'vue-class-component';
import designerArea from '@/components/designerContent/designerContent.vue';
import componentsList from '@/components/componentsList/componentsList.vue';
import pageFormView from '@/components/pageFormView/pageFormView.vue';
import { State, Mutation } from 'vuex-class';
import { Watch } from '@/modules/vuePropertyDecorator/vuePropertyDecorator';
import { extend } from '@/modules/utils/utils'

@Component({
  components: { designerArea, componentsList, pageFormView }
})
class DesigenerPage extends Vue {
  @State('plugins') plugins;
  @State('currentPlugins') currentPlugins
  @State('page') pageState

  @Mutation('updatePageProps') updatePageProps
  @Mutation('updatePluginsProps') updatePluginsProps

  @Watch('plugins', { deep: true })
  updateComponentsTree(newValue) {
    if (newValue.length) {
      this.componentList = [];
      newValue.map(item => {
        this.componentList.push({
          label: item.name,
          id: item.id
        });
      });
    }
  }
  @Watch('currentPlugins', { deep: true, immediate: true })
  updateCurrentPluginsFn(newValue) {
    this.currentPluginOptions = extend(true, {}, newValue[0])
  }
  @Watch('pageState', { deep: true, immediate: true })
  updatePage(newValue) {
    this.pageOptions = extend(true, {}, newValue)
  }

  logo = require('../../assets/logo1.png')
  componentList = [];
  currentPluginOptions = {}
  pageOptions = {}

  updatePluginsPropsFn(data) {
    this.updatePluginsProps(data)
  }

  updatePageFn(data) {
    this.updatePageProps(data)
  }
}

export default DesigenerPage;
