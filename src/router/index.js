import { createRouter, createWebHistory } from 'vue-router';
import Login from '../Auth/login.vue';


const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../components/HelloWorld.vue')
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('../pages/dashboard.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },


];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
