import base from "./base"
import axios from "./request"
const api={
    login(params){
        return axios.post(base.login,params);
    },
    getNote(){
        return axios.get(base.note);
    },
    getTrash(){
        return axios.get(base.trash);
    },
    addNote(id,params){
        return axios.post(base.add+id,params);
    },
    getNotes(id){
        return axios.get(base.notes+id);
    },
    deleteNotes(id){
        return axios.delete(base.notesList+id);
    },
    updateNotes(id,params){
        return axios.patch(base.notesList+id,params);
    }
}
export default api;