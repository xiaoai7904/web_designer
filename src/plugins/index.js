import Vue from 'vue'

import xaInput from './input/input.vue'
import xaSwitch from './switch/switch.vue'
import xaRadio from './radio/radio.vue'
import xaInputNumber from './inputNumber/inputNumber.vue'

const plugins = {
    xaInput,
    xaSwitch,
    xaRadio,
    xaInputNumber
}

const installComponents = function () {
    Object.keys(plugins).map(item => {
        Vue.component(item, plugins[item]);
    })
}

export default installComponents