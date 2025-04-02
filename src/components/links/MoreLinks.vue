<script setup lang="ts">
  import Card from "@/components/Card.vue";
</script>

<template>
  <card class="spaced">
    <h2>More Links</h2>
    <p>Other stuff</p>

    <div class="hStack edgeToEdge">
      <a href="https://app.warp.dev/referral/KVWRZZ">
        <button>Warp</button>
      </a>
    </div>

    <h3>Playlists</h3>
    <div class="hStack edgeToEdge">
      <router-link to="/playlists/topsongs">
        <button>Top Songs</button>
      </router-link>
    </div>
  </card>
</template>
