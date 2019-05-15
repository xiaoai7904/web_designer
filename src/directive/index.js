import Vue from 'vue';

import dragDialog from './dragDialog/dragDialog';

const directives = {
  ['drag-dialog']: dragDialog
};

export const installFn = function() {
  Object.keys(directives).map(item => {
    Vue.directive(item, directives[item]);
  });
};

installFn();
