<script setup lang="ts">
  import { ref } from 'vue'
  import HStack from '@/components/layout/HStack.vue'
  import VStack from '@/components/layout/VStack.vue'
  import Card from '@/components/layout/Card.vue'
  import InteriorItem from '@/components/layout/InteriorItem.vue'
  import FullscreenCover from "@/components/premade/FullscreenCover.vue";
  import DynamicImage from "@/components/utils/DynamicImage.vue";
  import NavigationLinks from "@/components/premade/navbar/NavigationLinks.vue";
  import NavigationButton from "@/components/premade/navbar/NavigationButton.vue";
  import SitePicker from "@/components/premade/navbar/SitePicker.vue";

  const showSwitcher = ref(false)

  defineProps<{
    hideProfile?: boolean
  }>()

  interface Item {
    name: string,
    link: string,
    icon: string
  }

  const apps: Item[] = [
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

  const creators: Item[] = [
    {
      name: "Character Card",
      link: "/create/charcard",
      icon: "/images/icons/CharCard-Icon.jpg",
    }
  ]

  const showMobileNav = ref(false)

  function toggleNavigation() {
    showMobileNav.value = !showMobileNav.value
  }

  const showSiteSwitcher = ref(false)

  function toggleSiteSwitcher() {
    showSiteSwitcher.value = !showSiteSwitcher.value
}
</script>

<template>
  <v-stack class="navBar">
    <slot />

    <fullscreen-cover v-if="showSwitcher" />
    <card v-if="showSwitcher" style="z-index: 3">
      <h2>Apps</h2>
      <h-stack class="tight">
        <interior-item v-for="app in apps" :key="app.name">
          <a :href="app.link" target="_blank">
            <dynamic-image class="launcherImage" :src="app.icon" :alt="app.name + ' icon'" radius="0.35rem" />
            <p>{{ app.name }}</p>
          </a>
        </interior-item>
      </h-stack>
    </card>
    <card v-if="showSwitcher" style="z-index: 3">
      <h2>Create...</h2>
      <h-stack class="tight">
        <interior-item v-for="creator in creators" :key="creator.name">
          <a :href="creator.link">
            <dynamic-image class="launcherImage" :src="creator.icon" :alt="creator.name + ' icon'" radius="0.35rem" />
            <p>{{ creator.name }}</p>
          </a>
        </interior-item>
      </h-stack>
    </card>

    <header id="mobileNav" :class="{ hidden: !showMobileNav }">
      <navigation-links />
    </header>

    <site-picker id="siteSwitcher" :class="{ hidden: !showSiteSwitcher }" />

    <h-stack>
      <button @click="showSwitcher = !showSwitcher" class="createBtn">
        <svg class="growIn" v-if="!showSwitcher" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" fill-rule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5m9-3a.75.75 0 0 1 .728.568l.258 1.036a2.63 2.63 0 0 0 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258a2.63 2.63 0 0 0-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.63 2.63 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.63 2.63 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5M16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395a1.5 1.5 0 0 0-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395a1.5 1.5 0 0 0 .948-.948l.395-1.183A.75.75 0 0 1 16.5 15" clip-rule="evenodd"/></svg>
        <svg class="spinIn" v-if="showSwitcher" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="m12 14.122l5.303 5.303a1.5 1.5 0 0 0 2.122-2.122L14.12 12l5.304-5.303a1.5 1.5 0 1 0-2.122-2.121L12 9.879L6.697 4.576a1.5 1.5 0 1 0-2.122 2.12L9.88 12l-5.304 5.304a1.5 1.5 0 1 0 2.122 2.12z"/></g></svg>
      </button>

      <header :class="{ desktopLinks: hideProfile }">
        <h-stack v-if="hideProfile !== true" class="profile transparent">
          <navigation-button link="/" id="homeButtonContainer">
            <img class="avatar" src="/images/avatar.jpg" alt="ash's Avatar (Go Home)" id="avatarButton">

            <svg aria-label="Go Home" id="homeButton" style="scale: 1.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 19v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-3q-.425 0-.712-.288T14 20v-5q0-.425-.288-.712T13 14h-2q-.425 0-.712.288T10 15v5q0 .425-.288.713T9 21H6q-.825 0-1.412-.587T4 19"/></svg>
          </navigation-button>

          <h-stack style="margin-right: 0.75rem">
            <h1 class="name">ash</h1>

            <h-stack
              id="siteSwitcherButton"
              class="light tight"
              :class="{ active: showSiteSwitcher }"
              @click="toggleSiteSwitcher"
            >
              <h1>Port</h1>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="m112 184l144 144l144-144"/>
              </svg>
            </h-stack>
          </h-stack>
        </h-stack>

        <navigation-links class="desktopLinks" />
      </header>

      <button id="mobileButton" @click="toggleNavigation">
        <svg class="growIn" v-if="!showMobileNav" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 28 28"><path fill="currentColor" d="M14 26c6.627 0 12-5.373 12-12S20.627 2 14 2S2 7.373 2 14s5.373 12 12 12m-.424-8.702a5 5 0 0 1-2.874-2.874L8.783 9.43a.5.5 0 0 1 .646-.647l4.995 1.92a5 5 0 0 1 2.874 2.873l1.919 4.995a.5.5 0 0 1-.646.646z"/></svg>
        <svg class="spinIn" v-if="showMobileNav" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="m12 14.122l5.303 5.303a1.5 1.5 0 0 0 2.122-2.122L14.12 12l5.304-5.303a1.5 1.5 0 1 0-2.122-2.121L12 9.879L6.697 4.576a1.5 1.5 0 1 0-2.122 2.12L9.88 12l-5.304 5.304a1.5 1.5 0 1 0 2.122 2.12z"/></g></svg>
      </button>
    </h-stack>
  </v-stack>
</template>

<style scoped>
  .navBar {
    position: sticky;
    flex-wrap: wrap;
    bottom: 1rem;
    max-width: calc(100vw - 2rem);
    z-index: 3;
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
    border-radius: 1.75rem;
    z-index: 3;
    backdrop-filter: blur(2rem);
    transition: width 0.2s ease;
  }

  .avatar {
    width: 3rem;
    height: 3rem;
    border-radius: 1.25rem;
  }

  .createBtn {
    height: fit-content;
    border-radius: 2rem;
    z-index: 3;
  }
  .createBtn::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 0.5rem;

    border-radius: 50%;
    background: var(--swirly-03);
    z-index: -1;
    filter: blur(1rem);
    transition: opacity 0.4s ease;
  }

  #avatarButton {
    display: block;
  }

  #homeButton {
    display: none;
  }

  #homeButtonContainer:hover #avatarButton {
    display: none;
  }

  #homeButtonContainer:hover #homeButton {
    display: flex;
  }
  #homeButton, #avatarButton {
    animation: blurIn 0.3s ease forwards;
  }
  @keyframes blurIn {
    0% {
      opacity: 0.5;
      filter: blur(0.5rem);
    }
    100% {
      opacity: 1;
      filter: none;
    }
  }

  .spinIn {
    animation: spinIn 0.3s ease forwards;
  }

  @keyframes spinIn {
    0% {
      transform: rotate(90deg);
    }

    100%{
      transform: none;
    }
  }

  .growIn {
    animation: growIn 0.2s ease forwards;
  }

  @keyframes growIn {
    0% {
      transform: scale(0);
    }

    100% {
      transform: scale(1);
    }
  }

  .launcherImage {
    width: 2rem;
    height: 2rem;
  }

  #mobileButton {
    display: none;
  }

  #mobileNav, #siteSwitcher {
    animation: slideBottom 0.3s ease forwards;
  }

  @keyframes slideBottom {
    0% {
      transform: translateY(100vh);
    }

    100% {
      transform: none;
    }
  }

  @media (max-width: 35rem) {
    #mobileButton {
      display: flex;
      border-radius: 2rem;
    }
    .desktopLinks {
      display: none;
    }
    .name {
      display: none;
    }
  }

  #siteSwitcherButton {
    cursor: pointer;
  }

  #siteSwitcherButton > svg {
    transition: transform 0.2s ease;
  }
  #siteSwitcherButton.active > svg {
    transform: rotate(-90deg);
  }
</style>
