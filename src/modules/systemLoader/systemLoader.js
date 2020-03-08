import Vue from 'vue';
import ElementUI from 'element-ui';
import Observer from '@/modules/observer/observer';
import Http from '@/modules/http/Http.module';
import installComponents from '@/plugins';
import contentmenu from 'v-contextmenu'
import 'v-contextmenu/dist/index.css'
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
    window.Uidesigner || (window.Uidesigner = {});
    window.Uidesigner.$event = new Observer();
  }
  mountComponents() {
    installComponents();
  }
  mountVue() {
    Vue.prototype.$http = new Http();
    Vue.use(ElementUI);
    Vue.use(contentmenu)
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
