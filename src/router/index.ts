import { createRouter, createWebHistory } from 'vue-router'

import HomeView from "@/views/HomeView.vue";
import LinksView from "@/views/LinksView.vue";
import AppsView from "../views/AppsView.vue";
import AppPage from "../views/AppPage.vue";
import GoodiesView from "@/views/GoodiesView.vue";
import PlaylistPage from "@/views/PlaylistPage.vue";
import CharCardMaker from "@/views/CharCardMaker.vue";

const routes = [
  { path: '/', component: HomeView },
  { path: '/links', component: LinksView },
  { path: '/apps', component: AppsView },
  { path: '/apps/:slug', component: AppPage },
  { path: '/playlists/:slug', component: PlaylistPage },
  { path: '/goodies', component: GoodiesView },
  { path: '/create/charcard', component: CharCardMaker  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})