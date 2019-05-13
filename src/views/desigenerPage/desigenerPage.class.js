import Vue from 'vue';
import Component from 'vue-class-component';
import designerArea from '@/components/designerContent/designerContent.vue';
import componentsList from '@/components/componentsList/componentsList.vue';
import pageFormView from '@/components/pageFormView/pageFormView.vue';
import { State, Mutation } from 'vuex-class';
import { Watch } from '@/modules/vuePropertyDecorator/vuePropertyDecorator';
import { extend } from '@/modules/utils/utils';

@Component({
  components: { designerArea, componentsList, pageFormView }
})
class DesigenerPage extends Vue {
  @State('plugins') plugins;
  @State('currentPlugins') currentPlugins;
  @State('page') pageState;

  @Mutation('updatePageProps') updatePageProps;
  @Mutation('updatePluginsProps') updatePluginsProps;
  @Mutation('setPerviewHtml') setPerviewHtml;

  @Watch('plugins', { deep: true, immediate: true })
  updateComponentsTree(newValue) {
    this.componentList = [];
    if (newValue.length) {
      newValue.map(item => {
        this.componentList.push({
          label: item.custom.name,
          id: item.id,
          isCurrent: true
        });
      });
    }
  }
  @Watch('currentPlugins', { deep: true, immediate: true })
  updateCurrentPluginsFn(newValue) {
    if (newValue[0]) {
      newValue[0].options.map(item => {
        if (item.type === 'inputNumber' && item.options) {
          item.id === 'custom.x' && (item.options.max = this.pageState.style.w);
          item.id === 'custom.y' && (item.options.max = this.pageState.style.h);
          item.id === 'custom.width' && (item.options.max = this.pageState.style.w);
          item.id === 'custom.height' && (item.options.max = this.pageState.style.h);
        }
      });
      this.currentPluginOptions = extend(true, {}, newValue[0]);
      this.$refs.componentTree && this.$refs.componentTree.setCheckedKeys(newValue.map(item => item.id))
    }else {
      this.currentPluginOptions = {}
      this.$refs.componentTree && this.$refs.componentTree.setCheckedKeys([])
    }
  }
  @Watch('pageState', { deep: true, immediate: true })
  updatePage(newValue) {
    this.pageOptions = extend(true, {}, newValue);
  }

  logo = require('../../assets/logo1.png');
  componentList = [];
  currentPluginOptions = {};
  pageOptions = {};
  updatePluginsPropsFn(data) {
    this.updatePluginsProps(data);
  }

  updatePageFn(data) {
    this.updatePageProps(data);
  }

  preview() {
    let _html = document.querySelector('#pageCanvasContainer');

    this.setPerviewHtml(_html.innerHTML);
    this.$router.push({ name: 'perview' });
  }
  release() {}
}

export default DesigenerPage;
