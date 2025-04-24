<template>
 <div class="fullScreenCover">
   <slot />
 </div>
</template>

<style scoped>
  .fullScreenCover {
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    z-index: 2;

    opacity: 0;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(2rem);
    border-radius: 0;
    animation: opacity 0.2s ease forwards;
  }

  @keyframes opacity {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
</style>