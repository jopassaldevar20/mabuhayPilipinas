import Vue from 'vue';
import App from './App.vue';
import store from './store';

import '@/assets/scss/app.scss';

Vue.config.productionTip = false;

store.dispatch('initViewportWatch');

new Vue({
  render: h => h(App),
  store
}).$mount('#app');
