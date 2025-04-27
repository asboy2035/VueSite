<script setup lang="ts">
  import HStack from "@/components/layout/HStack.vue"

  defineProps<{
    title: string
  }>()
</script>

<template>
  <h-stack>
    <div class="icon">
      <slot />
    </div>

    <h3>{{ title }}</h3>
  </h-stack>
</template>

<style scoped>
  .icon {
    width: 3rem;
    height: 3rem;
    background: var(--foreground-color);
    align-items: center;
    justify-content: center;
    border-radius: 1.25rem;
  }

  .icon > ::v-deep(svg) {
    width: 2rem;
    height: 2rem;
  }
</style>