<template>
  <div class="bottomMask" />
</template>

<style scoped>
  .bottomMask {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 4rem;

    background: linear-gradient(to top, var(--background-color), transparent);
    opacity: 0.75;
    border-radius: 0;
    z-index: 2;
  }
</style>