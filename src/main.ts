import Vue from 'vue';
import App from './index/App.vue';
import router from './index/router';
import store from './index/store';

import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
// themes https://vuematerial.io/themes/prebuilt
import 'vue-material/dist/theme/default.css';

Vue.use(VueMaterial);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
