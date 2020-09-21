import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MyNotes from "@/views/MyNotes";
import CircleNotes from "@/views/CircleNotes";
import NoteList from "@/views/NoteList";
import Login from "@/views/Login";

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        redirect: "/login",
    },
    {
        path: "/home",
        component: Home,
        children: [
            {
                path: "noteList",
                component: NoteList,
            },
            {
                path: "notesDetail",
                component: MyNotes
            }, {
                path: "circle",
                component: CircleNotes,
            }
        ]
    },
    {
        path:"/login",
        component:Login,
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
