import App from './App.vue'
import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
import router from './router'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false


new Vue({
  router,
  vuetify,
  VueAxios,
  axios,
  render: h => h(App)
}).$mount('#app')