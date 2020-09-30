import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store= new Vuex.Store({
  state: {
    isLogin:false,
    noteList:[],
    trashList:[],
    notesList:[],
  },
  mutations: {
    changeLog(state, logState) {
      state.isLogin = logState;
    },
    getNoteList(state,noteList){
      state.noteList=noteList;
    },
    getTrashList(state,trashList){
      state.trashList=trashList;
    },
    getNotesList(state,notesList){
      state.notesList=notesList;
    },
  },
  actions: {
  },
  modules: {
  }
})
export default store;
