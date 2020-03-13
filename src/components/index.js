import Vue from 'vue'
import itemList from './itemList/itemList';
import pageIconsView from './pageIconsView/pageIconsView';
import pageDialogView from './pageDialogView/pageDialogView'
import StyleSetting from './styleSetting/styleSetting'
import CodeEditor from '@/components/codeEditor/codeEditor';
const components = {
  itemList,
  pageIconsView,
  pageDialogView,
  StyleSetting,
  CodeEditor
};

export const installFn = function() {
  Object.keys(components).map(item => {
    Vue.component(item, components[item]);
  });
};

installFn();
