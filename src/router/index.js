import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Edit from '../views/Edit.vue'
import Add from '../views/Add.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/add', component: Add
    },
    {
        path: '/edit/:sessionId',
        name: 'edit',
        component: Edit
    },
    {
        path: '*',
        component: Home
    }
];

const router = new VueRouter({
    routes
});

export default router;
