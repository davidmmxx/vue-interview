import AgifyComponent from "@/components/AgifyComponent.vue";
import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import AboutView from '@/views/AboutView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: AgifyComponent
  },
    // naimportuj dynamicky do webpackChunkName 'another'
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
    // vytvor routu, ktora pred zobrazenim spravi redirect na www.google.com
    // pre tuto routu nebudeme vytvarat aktivny prvok na kliknutie, ale potrebujeme vyskusat ci funguje :)
  {
    path: '/redirect',
    name: 'redirect',
    component: AboutView,
    beforeEnter() {
      window.location.assign('https://www.google.com')
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
