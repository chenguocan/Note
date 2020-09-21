import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.config.productionTip = false
axios.defaults.baseURL = 'http://note-server.hunger-valley.com';
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/www-form-urlencoded';
Vue.use(VueAxios, axios)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
