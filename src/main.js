import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import observer from '@/modules/observer/observer';
import installComponents from '@/plugins';
import '@/directive'
import '@/components'
import './styles/system.scss';
import './lib/jqueryRuler/ruler.css';
import '@/styles/element-variables.scss'

Vue.use(ElementUI);
Vue.config.productionTip = false;
installComponents();

window.Uidesigner = {};
window.Uidesigner.$event = new observer();
window.Uidesigner.pluginsIns = null;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
