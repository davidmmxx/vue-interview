import AgifyComponent from "@/components/AgifyComponent.vue";
import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import AboutView from '@/views/AboutView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: AgifyComponent
  },
    // ADVANCED: naimportuj dynamicky do webpackChunkName:"another". Co to v praxi znamena?
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
    // uprav routu redirect, aby pred zobrazenim spravila redirect na www.google.com
    // pre tuto routu nebudeme vytvarat aktivny prvok na kliknutie, ale potrebujeme nejak vyskusat ci funguje :) - ako vyskusat?
  {
    path: '/redirect',
    name: 'redirect',
    component: AboutView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// zaloguj z ktorej routy na ktoru smeruje navigacia
router.beforeEach(() => {
})

export default router
