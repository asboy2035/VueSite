<script setup lang="ts">
  import { ref } from "vue"

  import Card from "@/components/layout/Card.vue"
  import VStack from "@/components/layout/VStack.vue"
  import HStack from "@/components/layout/HStack.vue"
  import FullscreenCover from "@/components/premade/FullscreenCover.vue"
  import SitePicker from "@/components/premade/navbar/SitePicker.vue"
  import DynamicImage from "@/components/utils/DynamicImage.vue";

  const showSiteSwitcher = ref(false)

  function toggleSiteSwitcher() {
    showSiteSwitcher.value = !showSiteSwitcher.value
  }
</script>

<template>
  <fullscreen-cover :class="{ hidden: !showSiteSwitcher }">
    <v-stack>
      <site-picker />
      <button @click="toggleSiteSwitcher()" style="border-radius: 2rem">
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="m12 14.122l5.303 5.303a1.5 1.5 0 0 0 2.122-2.122L14.12 12l5.304-5.303a1.5 1.5 0 1 0-2.122-2.121L12 9.879L6.697 4.576a1.5 1.5 0 1 0-2.122 2.12L9.88 12l-5.304 5.304a1.5 1.5 0 1 0 2.122 2.12z"/></g></svg>
      </button>
    </v-stack>
  </fullscreen-cover>

  <card class="stackModeOnly">
    <h-stack>
      <h-stack>
        <dynamic-image src="/images/avatar.jpg" alt="ash's Avatar" radius="2rem" class="bigAvatar" />
        <v-stack>
          <h-stack>
            <h1>ash</h1>
            <h1 class="light">asboy2035</h1>
          </h-stack>
        </v-stack>
      </h-stack>

      <button @click="toggleSiteSwitcher">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="currentColor" d="M21.41 8.64v-.05a10 10 0 0 0-18.78 0s0 0 0 .05a9.86 9.86 0 0 0 0 6.72v.05a10 10 0 0 0 18.78 0s0 0 0-.05a9.86 9.86 0 0 0 0-6.72M4.26 14a7.8 7.8 0 0 1 0-4h1.86a16.7 16.7 0 0 0 0 4Zm.82 2h1.4a12 12 0 0 0 1 2.57A8 8 0 0 1 5.08 16m1.4-8h-1.4a8 8 0 0 1 2.37-2.57A12 12 0 0 0 6.48 8M11 19.7A6.34 6.34 0 0 1 8.57 16H11Zm0-5.7H8.14a14.4 14.4 0 0 1 0-4H11Zm0-6H8.57A6.34 6.34 0 0 1 11 4.3Zm7.92 0h-1.4a12 12 0 0 0-1-2.57A8 8 0 0 1 18.92 8M13 4.3A6.34 6.34 0 0 1 15.43 8H13Zm0 15.4V16h2.43A6.34 6.34 0 0 1 13 19.7m2.86-5.7H13v-4h2.86a14.4 14.4 0 0 1 0 4m.69 4.57a12 12 0 0 0 1-2.57h1.4a8 8 0 0 1-2.4 2.57M19.74 14h-1.86a16 16 0 0 0 .12-2a16 16 0 0 0-.12-2h1.86a7.8 7.8 0 0 1 0 4"/>
        </svg>
        Sites
      </button>
    </h-stack>
  </card>
</template>