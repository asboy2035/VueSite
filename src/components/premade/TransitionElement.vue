<template>
  <div class="transitionElement" :class="{ active: isActive }" />
</template>

<script setup>
  import { ref } from 'vue'

  const isActive = ref(false)

  function show() {
    isActive.value = true
  }

  function hide() {
    isActive.value = false
  }

  defineExpose({ show, hide })
</script>

<style scoped>
  .transitionElement {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    background: var(--foreground-color);
    backdrop-filter: blur(3rem);
    border-radius: 0;
    z-index: 2;
    cursor: progress;
  }

  .transitionElement {
    transform: translateX(-100%);
    transition: transform 0.4s ease;
  }

  .transitionElement.active {
    transform: translateX(0%);
  }
</style>