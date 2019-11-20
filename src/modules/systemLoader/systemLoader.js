import Vue from 'vue';
import ElementUI from 'element-ui';
import Observer from '@/modules/observer/observer';
import installComponents from '@/plugins';
import '@/directive';
import '@/components';
import '@/styles/system.scss';
import '@/lib/jqueryRuler/ruler.css';
import '@/styles/element-variables.scss';

/**
 * 系统加载器
 */
export default class SystemLoader {
  constructor() {}
  mountGlobalVar() {
    window.Uidesigner = {};
    window.Uidesigner.$event = new Observer();
    window.Uidesigner.pluginsIns = null;
  }
  mountComponents() {
    installComponents();
  }
  mountVue() {
    Vue.use(ElementUI);
    Vue.config.productionTip = false;
  }
  bootstrap() {
    return new Promise(resolve => {
      this.mountGlobalVar();
      this.mountComponents();
      this.mountVue();
      resolve();
    });
  }
}
