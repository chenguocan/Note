import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import api from './helpers/api'
import  'element-ui/lib/theme-chalk/index.css'
import dayjs from "dayjs";
Vue.filter('formateData',function(val) {
        if(val) {
            val = dayjs(val).format('YYYY-MM-DD');
            return val;
        }
        return '';
/*      for (let i = 0; i < list.length; i++) {
        list[i].createdAt = dayjs(list[i].createdAt).format('YYYY-MM-DD');
        list[i].updatedAt = dayjs(list[i].updatedAt).format('YYYY-MM-DD');
      }*/
    })
Vue.config.productionTip = false
Vue.prototype.$api=api;
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
