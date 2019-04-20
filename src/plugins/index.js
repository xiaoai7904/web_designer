import Vue from 'vue'

import xaInput from './input/input.vue'
import xaSwitch from './switch/switch.vue'

const plugins = {
    xaInput,
    xaSwitch
}

const installComponents = function () {
    Object.keys(plugins).map(item => {
        Vue.component(item, plugins[item]);
    })
}

export default installComponents