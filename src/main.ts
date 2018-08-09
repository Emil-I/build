import Vue from 'vue';
import App from './index/App.vue';
import router from './index/router';
import store from './index/store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
