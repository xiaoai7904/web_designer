import Vue from "vue";
import xaMenu from "./menu/menu.vue";
import xaTable from "./table/table.vue";
import xaInput from "./input/input.vue";
import xaButton from "./button/button.vue";
const plugins = {xaMenu,xaTable,xaInput,xaButton};

Object.keys(plugins).map(item => {Vue.component(item, plugins[item]);});
