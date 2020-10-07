import Vue from 'vue'
import VueRouter from 'vue-router'

const Home =()=>import ('@/views/Home.vue');
const MyNotes=()=>import('@/views/MyNotes');
const CircleNotes=()=>import('@/views/CircleNotes');
const NoteList=()=>import('@/views/NoteList');
const Login=()=>import ('@/views/Login');

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
