import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store= new Vuex.Store({
  state: {
    isLogin:false,
    noteList:[],
    trashList:[],
  },
  mutations: {
    changeLog(state, logState) {
      state.isLogin = logState;
    },
    getNoteList(state,noteList){
      state.noteList=noteList;
    },
    getTrash(state,trashList){
      state.trashList=trashList;
    }
  },
  actions: {
  },
  modules: {
  }
})
export default store;
