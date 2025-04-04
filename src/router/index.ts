import { createRouter, createWebHistory } from 'vue-router'

import HomeView from "@/views/HomeView.vue";
import LinksView from "@/views/LinksView.vue";
import AppsView from "../views/AppsView.vue";
import AppPage from "../views/AppPage.vue";

const routes = [
  { path: '/', component: HomeView },
  { path: '/links', component: LinksView },
  { path: '/apps', component: AppsView },
  { path: '/apps/:slug', component: AppPage },
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})