import Vue from 'vue'
import itemList from './itemList/itemList';
import pageIconsView from './pageIconsView/pageIconsView';
import pageDialogView from './pageDialogView/pageDialogView'

const components = {
  itemList,
  pageIconsView,
  pageDialogView
};

export const installFn = function() {
  Object.keys(components).map(item => {
    Vue.component(item, components[item]);
  });
};

installFn();
