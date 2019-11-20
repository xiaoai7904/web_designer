import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import SystemLoader from '@/modules/systemLoader/systemLoader';


new SystemLoader().bootstrap().then(() => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app');
});
