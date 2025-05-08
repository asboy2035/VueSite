<script setup lang="ts">
  import VStack from "@/components/layout/VStack.vue"
  import Card from "@/components/layout/Card.vue"
  import SitePick from "@/components/premade/navbar/SitePick.vue"
  import HStack from "@/components/layout/HStack.vue"
  import {Icon} from "@iconify/vue"

  function isMainHost(): boolean {
    const host = window.location.href
    return !host.includes("alt.asboy2035.com");
  }
</script>

<template>
  <card class="sitePicker">
    <v-stack>
      <h2>Sites</h2>

      <router-link to="/">
        <site-pick
          title="Portfolio"
          icon="solar:bag-heart-line-duotone"
        />
      </router-link>

      <a href="https://guide.asboy2035.com/">
        <site-pick
          title="Guides"
          icon="solar:book-line-duotone"
        />
      </a>

      <v-stack>
        <h3>Hosts</h3>
        <h-stack>
          <a href="https://asboy2035.com">
            <button :disabled="isMainHost">
              <Icon icon="solar:planet-bold-duotone" width="24" height="24" />
              Main
            </button>
          </a>

          <a href="https://alt.asboy2035.com/">
            <button :disabled="!isMainHost">
              <Icon icon="solar:planet-bold-duotone" width="24" height="24" />
              Alternate
            </button>
          </a>
        </h-stack>
      </v-stack>
    </v-stack>
  </card>
</template>

<style>
  .sitePicker {
    max-width: fit-content;
  }

  .sitePicker.fullWidth {
    max-width: 100%;
  }
</style>
