<script setup lang="ts">
  import VStack from "@/components/layout/VStack.vue"
  import Card from "@/components/layout/Card.vue"
  import SitePick from "@/components/premade/navbar/SitePick.vue"
  import {Icon} from "@iconify/vue"
</script>

<template>
  <card class="sitePicker">
    <v-stack>
      <h2>Sites</h2>

      <router-link to="/">
        <site-pick title="Portfolio">
          <Icon icon="solar:bag-heart-line-duotone" width="24" height="24" />
        </site-pick>
      </router-link>

      <a href="https://guide.asboy2035.com/">
        <site-pick title="Guides">
          <Icon icon="solar:book-line-duotone" width="24" height="24" />
        </site-pick>
      </a>
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
