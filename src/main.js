import Vue from 'vue';
import App from './App.vue';
import './mixins/dpr-img';
import 'vant/lib/index.css';
import router from './router';
import store from './store';
import '../src/assets/scss/_index.scss';
import '../src/assets/scss/_reset.scss';
import './vant-config'; // 配置vant

import './utils/veeValidator.config';

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
