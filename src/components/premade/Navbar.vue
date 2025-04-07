<script setup lang="ts">
import { ref } from 'vue'
import HStack from '@/components/layout/HStack.vue'
import VStack from '@/components/layout/VStack.vue'
import Card from '@/components/layout/Card.vue'
import InteriorItem from '@/components/layout/InteriorItem.vue'
import FullscreenCover from "@/components/premade/FullscreenCover.vue";

const showSwitcher = ref(false)

defineProps<{
  hideProfile?: boolean
}>()

interface App {
  name: string,
  link: string,
  icon: string
}

const apps: App[] = [
  {
    name: 'tewFA',
    link: 'https://tfa.asboy2035.com',
    icon: 'https://tfa.asboy2035.com/assets/icon-1024.png'
  },
  {
    name: "Astro",
    link: "https://ashtronomy.pages.dev/",
    icon: "https://ashtronomy.pages.dev/Images/Astronomy-Icon.png",
  },
  {
    name: "Clocs",
    link: "https://clocs.pages.dev/",
    icon: "https://clocs.pages.dev/Icons/Icon.png",
  },
  {
    name: "Vault",
    link: "/vault/",
    icon: "https://byteforge-site-3-3.byteforge.pages.dev/Images/Vault-Icon.jpeg",
  },
]
</script>

<template>
  <v-stack style="z-index: 3">
    <slot />

    <fullscreen-cover v-if="showSwitcher" />
    <card v-if="showSwitcher" style="transition: 0.3s ease; z-index: 3">
      <h2>App Launcher (Beta)</h2>
      <h-stack class="tight">
        <interior-item v-for="app in apps" :key="app.name">
          <a :href="app.link" target="_blank">
            <img :src="app.icon" :alt="app.name + ' icon'" style="width: 2rem">
            <p>{{ app.name }}</p>
          </a>
        </interior-item>
      </h-stack>
    </card>

    <h-stack>
      <button @click="showSwitcher = !showSwitcher" style="height: fit-content; border-radius: 2rem; z-index: 3">
        <svg v-if="!showSwitcher" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" fill-rule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5m9-3a.75.75 0 0 1 .728.568l.258 1.036a2.63 2.63 0 0 0 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258a2.63 2.63 0 0 0-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.63 2.63 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.63 2.63 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5M16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395a1.5 1.5 0 0 0-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395a1.5 1.5 0 0 0 .948-.948l.395-1.183A.75.75 0 0 1 16.5 15" clip-rule="evenodd"/></svg>
        <svg v-if="showSwitcher" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="m12 14.122l5.303 5.303a1.5 1.5 0 0 0 2.122-2.122L14.12 12l5.304-5.303a1.5 1.5 0 1 0-2.122-2.121L12 9.879L6.697 4.576a1.5 1.5 0 1 0-2.122 2.12L9.88 12l-5.304 5.304a1.5 1.5 0 1 0 2.122 2.12z"/></g></svg>
      </button>

      <header>
        <h-stack v-if="hideProfile !== true" class="profile transparent">
          <router-link to="/">
            <img class="avatar" src="/images/avatar.jpg" alt="ash's Avatar">
          </router-link>
          <h1>ash</h1>
        </h-stack>

        <h-stack class="tight">
          <router-link to="/links">
            <button class="navigationButton" aria-label="ash's Links">
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></g></svg>
            </button>
          </router-link>

          <router-link to="/apps/">
            <button class="navigationButton" aria-label="ash's Apps">
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12.864 3.496a1 1 0 0 0-1.728 0l-3.5 6A1 1 0 0 0 8.5 11h7a1 1 0 0 0 .864-1.504zM4 13a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm12.5-1a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9"/></svg>
            </button>
          </router-link>

          <router-link to="/goodies/">
            <button class="navigationButton" aria-label="Goodies">
              <svg width="24" height="24" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="m479.66 268.7l-32-151.81C441.48 83.77 417.68 64 384 64H128c-16.8 0-31 4.69-42.1 13.94s-18.37 22.31-21.58 38.89l-32 151.87A16.7 16.7 0 0 0 32 272v112a64 64 0 0 0 64 64h320a64 64 0 0 0 64-64V272a16.7 16.7 0 0 0-.34-3.3m-384-145.4v-.28c3.55-18.43 13.81-27 32.29-27H384c18.61 0 28.87 8.55 32.27 26.91c0 .13.05.26.07.39l26.93 127.88a4 4 0 0 1-3.92 4.82H320a15.92 15.92 0 0 0-16 15.82a48 48 0 1 1-96 0A15.92 15.92 0 0 0 192 256H72.65a4 4 0 0 1-3.92-4.82Z"/><path fill="currentColor" d="M368 160H144a16 16 0 0 1 0-32h224a16 16 0 0 1 0 32m16 64H128a16 16 0 0 1 0-32h256a16 16 0 0 1 0 32"/></svg>
            </button>
          </router-link>
        </h-stack>
      </header>
    </h-stack>
  </v-stack>
</template>

<style scoped>
.vStack {
  position: sticky;
  flex-wrap: wrap;
  bottom: 1rem;
  max-width: calc(100vw - 2rem);
  z-index: 2;
  align-items: center;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
  background: var(--foreground-color);
  box-shadow: 0.5rem 0.5rem 3rem rgba(28, 28, 28, 0.2);
  padding: 0.5rem;
  border-radius: 2rem;
  z-index: 3;
  backdrop-filter: blur(2rem);
}

.avatar, .navigationButton {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  transition: 0.2s ease-in-out;
}
.navigationButton {
  padding: 0;
}
.navigationButton > svg {
  height: 2rem;
}
</style>