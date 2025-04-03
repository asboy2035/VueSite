import { createRouter, createWebHistory } from 'vue-router'

import HomeView from "@/views/HomeView.vue";
import LinksView from "@/views/LinksView.vue";
import AppsView from "../views/AppsView.vue";

const routes = [
  { path: '/', component: HomeView },
  { path: '/links', component: LinksView },
  { path: '/apps', component: AppsView },
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})