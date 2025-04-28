<script setup lang="ts">
  import Card from "@/components/layout/Card.vue";
  import HStack from "@/components/layout/HStack.vue";
</script>

<template>
  <card class="spaced">
    <h2>More Links</h2>
    <p>Other stuff</p>

    <h-stack>
      <a href="https://app.warp.dev/referral/KVWRZZ">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12.035 2.723h9.253A2.71 2.71 0 0 1 24 5.435v10.529a2.71 2.71 0 0 1-2.712 2.713H8.047Zm-1.681 2.6L6.766 19.677h5.598l-.399 1.6H2.712A2.71 2.71 0 0 1 0 18.565V8.036a2.71 2.71 0 0 1 2.712-2.712Z"/></svg>
          Warp
        </button>
      </a>

      <a href="https://stats.foldingathome.org/donor/id/732018511">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><circle cx="12" cy="13" r="4"/><circle cx="12" cy="4" r="2"/><circle cx="4" cy="20" r="2"/><circle cx="20" cy="20" r="2"/><path d="M12 9V6m6.5 12.5L15 16m-9.5 2.5L9 16"/></g></svg>
          FaH
        </button>
      </a>

      <a href="https://www.last.fm/user/asboy_lfm">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M18.671 3.208A2 2 0 0 1 21 5.18V17a4 4 0 1 1-2-3.465V9.18L9 10.847V18q0 .09-.015.174A3.5 3.5 0 1 1 7 15.337v-8.49a2 2 0 0 1 1.671-1.973zM9 8.82l10-1.667V5.18L9 6.847z"/></g></svg>
          Last.fm
        </button>
      </a>
    </h-stack>

    <h3>Playlists</h3>
    <h-stack>
      <router-link to="/playlists/topsongs">
        <button>Top Songs</button>
      </router-link>
    </h-stack>
  </card>
</template>
