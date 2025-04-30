<script setup lang="ts">
  defineProps<{
    link: string
  }>()
</script>

<template>
  <router-link :to="link">
    <button class="navigationButton">
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