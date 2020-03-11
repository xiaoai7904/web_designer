import Vue from 'vue';
import Component from 'vue-class-component';
import designerArea from '@/components/designerContent/designerContent.vue';
import componentsList from '@/components/componentsList/componentsList.vue';
import pageFormView from '@/components/pageFormView/pageFormView.vue';
import { State, Mutation } from 'vuex-class';
import { Watch } from '@/modules/vuePropertyDecorator/vuePropertyDecorator';
import { extend } from '@/modules/utils/utils';
import Configuration from '@/modules/configuration/configuration';

let componentConfig = new Configuration().getDefaultConfig();

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
  @Mutation('updateCurrentPlugins') updateCurrentPluginsCb;

  @Watch('plugins', { deep: true, immediate: true })
  updateComponentsTree(newValue) {
    this.componentList = [];
    if (newValue.length) {
      const add = data => {
        let componentList = [];
        data.map(item => {
          if (item.children) {
            componentList.push({
              label: item.custom.name,
              id: item.id,
              isCurrent: true,
              children: add(item.children)
            });
          } else {
            componentList.push({
              label: item.custom.name,
              id: item.id,
              isCurrent: true
            });
          }
          return componentList;
        });
        return componentList;
      };
      this.componentList = add(newValue).slice();
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
      this.$refs.componentTree && this.$refs.componentTree.setCheckedKeys(newValue.map(item => item.id));
    } else {
      this.currentPluginOptions = {};
      this.$refs.componentTree && this.$refs.componentTree.setCheckedKeys([]);
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
  componentData = {};
  componentTitleMap = {
    basis: '基础组件',
    chart: '图表组件'
  };

  updatePluginsPropsFn(data) {
    this.updatePluginsProps(data);
  }

  componentNodeClick(nodeObj) {
    this.updateCurrentPluginsCb(this.plugins.filter(item => item.id === nodeObj.id));
  }

  updatePageFn(data) {
    this.updatePageProps(data);
  }

  preview() {
    let _html = document.querySelector('#pageCanvasContainer');

    this.setPerviewHtml(_html.innerHTML);
    this.$router.push({ name: 'perview' });
  }
  release() {
    this.save('release').then(() => {
      let loadingNotify = this.$notify.info({
        title: '提示',
        duration: 0,
        showClose: false,
        message: '模版生成中,请稍后...'
      });

      this.$http.post('/api/release', { page: JSON.stringify(this.$store.state.page), terminal: navigator.platform.indexOf('Mac') > -1 ? 'mac' : 'windows' }).then(
        data => {
          loadingNotify.close();
          this.$notify({
            title: '成功',
            message: '模版生成成功',
            type: 'success'
          });
          this.$http.post('/api/install');
        },
        err => {
          loadingNotify.close();
          this.$notify.error({
            title: '错误',
            message: '模版生成失败,' + err.data.msg
          });
        }
      );
    });
  }
  save(type) {
    return new Promise(resolve => {
      window.localStorage.setItem(
        'pagePlugins',
        JSON.stringify(this.$store.state.plugins, (key, value) => {
          if (typeof value === 'function') {
            return value.toString();
          }
          return value;
        })
      );
      type !== 'release' &&
        this.$alert('数据保存成功', '提示', {
          confirmButtonText: '确定'
        });
      resolve();
    });
  }

  mounted() {
    let obj = {};
    componentConfig.map(item => {
      if (item.type) {
        if (!obj[item.type]) {
          obj[item.type] = [];
        }
        obj[item.type].push(item);
      } else {
        if (!obj.basis) {
          obj.basis = [];
        }
        obj.basis.push(item);
      }
    });
    this.componentData = Object.assign({}, obj);
  }
}

export default DesigenerPage;
