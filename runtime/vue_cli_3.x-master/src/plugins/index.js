import Vue from "vue";
import xaCheckBox from "./checkBox/checkBox.vue";
import xaEchartsBar from "./echartsBar/echartsBar.vue";
import xaButton from "./button/button.vue";
const plugins = {xaCheckBox,xaEchartsBar,xaButton};

Object.keys(plugins).map(item => {Vue.component(item, plugins[item]);});
