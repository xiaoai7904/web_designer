import Vue from 'vue'
import itemList from './itemList/itemList';
import pageIconsView from './pageIconsView/pageIconsView';
import pageDialogView from './pageDialogView/pageDialogView'
import StyleSetting from './styleSetting/styleSetting'
import CodeEditor from '@/components/codeEditor/codeEditor';
import EventSetting from '@/components/eventSetting/eventSetting'
import PageScrollbar from '@/components/pageScrollbar/pageScrollbar'
const components = {
  itemList,
  pageIconsView,
  pageDialogView,
  StyleSetting,
  CodeEditor,
  EventSetting,
  PageScrollbar
};

export const installFn = function() {
  Object.keys(components).map(item => {
    Vue.component(item, components[item]);
  });
};

installFn();
