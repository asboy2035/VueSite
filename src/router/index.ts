import { createRouter, createWebHistory } from 'vue-router'

import HomeView from "@/views/HomeView.vue";
import LinksView from "@/views/LinksView.vue";

const routes = [
  { path: '/', component: HomeView },
  { path: '/links', component: LinksView },
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})