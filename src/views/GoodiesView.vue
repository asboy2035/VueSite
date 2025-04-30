<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { useHead } from '@vueuse/head'
  import Card from "@/components/layout/Card.vue"
  import Spacer from "@/components/utils/Spacer.vue"
  import VStack from "@/components/layout/VStack.vue"
  import Grid from "@/components/layout/Grid.vue"
  import Hero from "@/components/utils/Hero.vue"
  import HStack from "@/components/layout/HStack.vue"
  import BottomMask from "@/components/premade/BottomMask.vue"
  import BottomFooter from "@/components/premade/BottomFooter.vue"
  import Navbar from "@/components/premade/navbar/Navbar.vue"
  import NoCss from "@/components/premade/NoCss.vue"
  import {Icon} from "@iconify/vue"

  interface CursorAsset {
    type: string
    path: string
  }

  interface Cursor {
    name: string
    version: string
    downloadURL: string
    assets: CursorAsset[]
  }

  const cursors = ref<Cursor[]>([])

  onMounted(() => {
    cursors.value = [
      {
        name: "Bibata Modern",
        version: "0",
        downloadURL: "/bibataModern/ash.bibatamodern.cape",
        assets: [
          { type: "Pointer", path: "/cursors/bibataModern/Pointer.png" },
          { type: "Pointing", path: "/cursors/bibataModern/Pointing-Hand.png" },
          { type: "Copy", path: "/cursors/bibataModern/Copy.png" },
          { type: "Camera", path: "/cursors/bibataModern/Camera-v2.png" }
        ]
      }
    ]
  })

  useHead({
    title: "ash's Goodies",
    meta: [
      { name: "description", content: "Misc stuff from me." },
      { property: "og:title", content: "ash's Goodies" },
      { property: "og:description", content: "Misc stuff from me." }
    ]
  })
</script>

<template>
  <no-css />
  <bottom-mask />

  <div class="contentView">
    <hero image="/images/Goodies.jpg">
      <h1>Goodies</h1>
      <p>Other downloadable content available on my site.</p>

      <h-stack>
        <a href="https://asboy.gumroad.com">
          <button>
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M9.876 9.303C9.37 9.807 9 10.6 9 11.75c0 1.001.276 1.833.71 2.39c.417.536 1.005.86 1.79.86c.48 0 1.099-.35 1.66-1.059a4.5 4.5 0 0 0 .576-.941H13a1 1 0 1 1 0-2h2a2 2 0 0 1 2 2v2.5a1 1 0 1 1-2 0v-.686a7 7 0 0 1-.272.37C14.002 16.1 12.87 17 11.5 17c-1.424 0-2.586-.627-3.367-1.63C7.369 14.389 7 13.096 7 11.75c0-1.6.526-2.932 1.467-3.866C9.403 6.955 10.668 6.5 12 6.5c.921 0 1.785.262 2.524.717c.415.255.944.654 1.347 1.16a1 1 0 1 1-1.565 1.246c-.21-.264-.533-.52-.83-.702A2.8 2.8 0 0 0 12 8.5c-.877 0-1.612.295-2.124.803"/></g></svg>
            Gumroad
          </button>
        </a>
      </h-stack>
    </hero>

    <grid class="spaced">
      <!-- Cursors Card -->
      <card>
        <h2>Cursors</h2>
        <p class="light">macOS cursors</p>
        <spacer />

        <v-stack class="fullWidth">
          <v-stack v-for="cursor in cursors" :key="cursor.name" class="spaced">
            <h3>{{ cursor.name }}</h3>
            <h-stack class="scrollable">
              <div v-for="asset in cursor.assets" :key="asset.type" class="cursorAsset">
                <img :src="asset.path" :alt="asset.type" />
                <p>{{ asset.type }}</p>
              </div>
            </h-stack>
            <a :href="cursor.downloadURL">
              <button>
                <Icon icon="iconoir:finder" width="24" height="24" />
                Download
              </button>
            </a>
          </v-stack>
        </v-stack>
      </card>

      <!-- Wallpapers Card -->
      <card>
        <h2>Wallpapers</h2>
        <p class="light">Wallpapers for any device.</p>
        <p class="light">Coming soon.</p>
      </card>
    </grid>

    <bottom-footer />
    <navbar />
  </div>
</template>

<style scoped>
  .cursorAsset {
    background: var(--foreground-color);
    border-radius: 1rem;
    padding: 0.5rem;
  }

  .cursorAsset > img {
    height: 3rem;
    width: 3rem;
  }
</style>