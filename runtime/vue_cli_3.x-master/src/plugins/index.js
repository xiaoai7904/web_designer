import Vue from "vue";
import xaButton from "./button/button.vue";
import xaInput from "./input/input.vue";
const plugins = {xaButton,xaInput};

Object.keys(plugins).map(item => {Vue.component(item, plugins[item]);});
