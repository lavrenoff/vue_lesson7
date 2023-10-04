import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSplide from '@splidejs/vue-splide';

Vue.config.productionTip = false

new Vue({
  VueSplide,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
