import Vue from 'vue'
import itemList from './itemList/itemList';

const components = {
  itemList
};

export const installFn = function() {
  Object.keys(components).map(item => {
    Vue.component(item, components[item]);
  });
};

installFn();
