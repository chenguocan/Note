import base from "./base"
import axios from "./request"
const api={
    login(params){
        return axios.post(base.login+'login/',params);
    },
    getLogin(){
        return axios.get(base.login);
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
    },
    deleteTrash(id){
        return axios.delete(base.notesList+id+'/confirm');
    },
    revertNote(id){
        return axios.patch(base.notesList+id+'/revert');
    },
    createNote(params){
        return axios.post(base.note,params);
    },
    deleteNote(id){
        return axios.delete(base.note+id);
    },
    editNote(id,params){
        return axios.patch(base.note+id,params);
    }
}
export default api;