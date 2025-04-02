<script setup lang="ts">
  import HStack from "@/components/HStack.vue";

  defineProps<{
    hideProfile?: boolean
  }>()
</script>

<template>
  <header>
<!--    Optional Profile-->
    <h-stack v-if="hideProfile !== true" class="profile transparent">
      <router-link to="/">
        <img class="avatar" src="@/images/avatar.jpg" alt="ash's Avatar">
      </router-link>
      <h1>ash</h1>
    </h-stack>

    <!-- Navigation -->
    <h-stack class="tight">
      <router-link to="/links">
        <button class="navigationButton" aria-label="ash's Links">
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></g></svg>
        </button>
      </router-link>

      <router-link to="/apps/">
        <button class="navigationButton" aria-label="ash's Apps">
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12.864 3.496a1 1 0 0 0-1.728 0l-3.5 6A1 1 0 0 0 8.5 11h7a1 1 0 0 0 .864-1.504zM4 13a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm12.5-1a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9"/></svg>
        </button>
      </router-link>

      <router-link to="/goodies/">
        <button class="navigationButton" aria-label="Goodies">
          <svg width="24" height="24" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="m479.66 268.7l-32-151.81C441.48 83.77 417.68 64 384 64H128c-16.8 0-31 4.69-42.1 13.94s-18.37 22.31-21.58 38.89l-32 151.87A16.7 16.7 0 0 0 32 272v112a64 64 0 0 0 64 64h320a64 64 0 0 0 64-64V272a16.7 16.7 0 0 0-.34-3.3m-384-145.4v-.28c3.55-18.43 13.81-27 32.29-27H384c18.61 0 28.87 8.55 32.27 26.91c0 .13.05.26.07.39l26.93 127.88a4 4 0 0 1-3.92 4.82H320a15.92 15.92 0 0 0-16 15.82a48 48 0 1 1-96 0A15.92 15.92 0 0 0 192 256H72.65a4 4 0 0 1-3.92-4.82Z"/><path fill="currentColor" d="M368 160H144a16 16 0 0 1 0-32h224a16 16 0 0 1 0 32m16 64H128a16 16 0 0 1 0-32h256a16 16 0 0 1 0 32"/></svg>
        </button>
      </router-link>
    </h-stack>
  </header>
</template>

<style scoped>
  header {
    display: flex;
    position: sticky;
    flex-wrap: wrap;
    bottom: 1rem;
    max-width: calc(100vw - 2rem);
    justify-content: space-between;
    align-items: center;

    gap: 0.75rem;
    background: var(--foreground-color);
    box-shadow: 0.5rem 0.5rem 3rem rgba(28, 28, 28, 0.2);
    padding: 0.5rem;
    border-radius: 2rem;
    z-index: 3;
    backdrop-filter: blur(2rem);
  }

  .avatar, .navigationButton {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    transition: 0.2s ease-in-out;
  }
  .navigationButton {
    padding: 0;
  }
  .navigationButton > svg {
    height: 2rem;
  }
</style>