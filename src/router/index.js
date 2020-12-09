import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Nova estadia",
        component: () => import("../views/Home/Home.vue")
    },
    {
        path: "/historico",
        name: "Histórico",
        component: () => import("../views/Historico/Historico.vue")
    },
    {
        path: "/informacao",
        name: "Informação",
        component: () => import("../views/Info.vue")
    }
];

const router = new VueRouter({
    routes
});

export default router;
