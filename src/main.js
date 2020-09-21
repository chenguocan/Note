import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.config.productionTip = false
axios.defaults.baseURL = '//note-server.hunger-valley.com';
axios.defaults.headers.post['Content-Type'] = 'application/www-form-urlencoded';
axios.defaults.withCredentials = true;
Vue.use(VueAxios, axios)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
