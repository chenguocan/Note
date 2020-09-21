import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store= new Vuex.Store({
  state: {
    isLogin:false,
  },
  mutations: {
    changeLog(state, logState) {
      state.isLogin = logState;
    }
  },
  actions: {
  },
  modules: {
  }
})
export default store;
