import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Main from './components/Main';

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/main',
        component: Main
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/portfolio',
        component: Portfolio
    },
    {
        path: '/contact',
        component: Contact
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;