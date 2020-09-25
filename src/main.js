import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui';
import VueAxios from 'vue-axios'
import  'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
axios.defaults.baseURL = 'http://note-server.hunger-valley.com';
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/www-form-urlencoded';
Vue.use(VueAxios, axios)
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
