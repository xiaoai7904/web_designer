import Vue from 'vue';
import RumtimePageAutoView from './runtimePageAutoView/runtimePageAutoView.vue';

const components = {
  RumtimePageAutoView
};

export const installFn = function() {
  Object.keys(components).map(item => {
    Vue.component(item, components[item]);
  });
};

installFn();
