<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import Card from "@/components/layout/Card.vue"
  import VStack from "@/components/layout/VStack.vue"
  import HStack from "@/components/layout/HStack.vue"
  import SitePicker from "@/components/premade/navbar/SitePicker.vue"
  import DynamicImage from "@/components/utils/DynamicImage.vue"
  import {Icon} from "@iconify/vue"

  const currentTime = ref('')

  const updateTime = () => {
    const now = new Date()
    const options: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: 'Europe/Paris',
      hour12: false,
    }
    currentTime.value = now.toLocaleTimeString('en-GB', options);
  }

  onMounted(() => {
    updateTime() // Initialize immediately
    setInterval(updateTime, 1000) // Update every second
  })
</script>

<template>
  <div class="sidebarView sidebarModeOnly spaced">
    <card>
      <v-stack>
        <dynamic-image src="/images/avatar.png" alt="ash's Avatar" radius="2rem" class="bigAvatar" />
        <h1>ash</h1>
        <h2 class="light" style="margin-top: 0">asboy2035</h2>
      </v-stack>
    </card>

    <card>
      <h3>{{ currentTime }}</h3>
      <h-stack class="spaced">
        <icon icon="solar:bolt-line-duotone" width="24" height="24" />
        <a href="https://github.com/asboy2035" target="_blank" rel="noopener noreferrer">
          <button>
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M7.024 2.31a9 9 0 0 1 2.125 1.046A11.4 11.4 0 0 1 12 3c.993 0 1.951.124 2.849.355a9 9 0 0 1 2.124-1.045c.697-.237 1.69-.621 2.28.032c.4.444.5 1.188.571 1.756c.08.634.099 1.46-.111 2.28C20.516 7.415 21 8.652 21 10c0 2.042-1.106 3.815-2.743 5.043a9.5 9.5 0 0 1-2.59 1.356c.214.49.333 1.032.333 1.601v3a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-.991c-.955.117-1.756.013-2.437-.276c-.712-.302-1.208-.77-1.581-1.218c-.354-.424-.74-1.38-1.298-1.566a1 1 0 0 1 .632-1.898c.666.222 1.1.702 1.397 1.088c.48.62.87 1.43 1.63 1.753c.313.133.772.22 1.49.122L8 17.98a4 4 0 0 1 .333-1.581a9.5 9.5 0 0 1-2.59-1.356C4.106 13.815 3 12.043 3 10c0-1.346.483-2.582 1.284-3.618c-.21-.82-.192-1.648-.112-2.283l.005-.038c.073-.582.158-1.267.566-1.719c.59-.653 1.584-.268 2.28-.031Z"/></g></svg>
            GitHub
          </button>
        </a>
        <a href="mailto:ash@asboy2035.com" class="spaced">
          <icon icon="solar:plain-line-duotone" />
          Email
        </a>
      </h-stack>
    </card>

    <site-picker class="fullWidth" />
  </div>
</template>

<style scoped lang="sass">
  .sidebarView
    width: 20rem
</style>