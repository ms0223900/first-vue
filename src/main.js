import Vue from 'vue';
import App from './App.vue';
import router from './components/vue-router/router.vue';
import currency from './vuex/lib/currency';
import store from './vuex/store/store';

Vue.config.productionTip = false;

Vue.filter('currency', currency);

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount('#app');
