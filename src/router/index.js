import AgifyComponent from "@/components/AgifyComponent.vue";
import { createRouter, createWebHistory } from "vue-router";
const routes = [
    {
        path: '/',
        name: 'home',
        component: AgifyComponent
    },
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});
export default router;
//# sourceMappingURL=index.js.map