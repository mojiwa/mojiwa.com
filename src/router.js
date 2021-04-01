import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Portfolio from "./components/Portfolio.vue";
import Contact from "./components/Contact.vue";
import Main from "./components/Main.vue";

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/main",
        component: Main
    },
    {
        path: "/about",
        component: About
    },
    {
        path: "/portfolio",
        component: Portfolio
    },
    {
        path: "/contact",
        component: Contact
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;