<template>
 <div class="fullScreenCover" />
</template>

<style scoped>
  .fullScreenCover {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 2;

    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(2rem);
  }
</style>