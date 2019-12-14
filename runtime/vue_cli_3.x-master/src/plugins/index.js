import Vue from "vue";
import xaMenu from "./menu/menu.vue";
import xaTable from "./table/table.vue";
import xaBreadcrumb from "./breadcrumb/breadcrumb.vue";
const plugins = {xaMenu,xaTable,xaBreadcrumb};

Object.keys(plugins).map(item => {Vue.component(item, plugins[item]);});
