<script setup lang="ts">
  import {Icon} from "@iconify/vue";

  defineProps<{
    link: string
    icon?: string
  }>()
</script>

<template>
  <router-link :to="link">
    <button class="navigationButton">
      <Icon v-if="icon" :icon="icon" />
      <slot />
    </button>
  </router-link>
</template>

<style scoped>
  .navigationButton {
    width: 3rem;
    height: 3rem;
    border-radius: 1.25rem;
    transition: 0.2s ease-in-out;
    padding: 0;
  }
  .navigationButton > ::v-deep(svg) {
    height: 1.25rem;
    width: 1.25rem;
  }
</style>