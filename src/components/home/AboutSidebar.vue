<script setup lang="ts">
  import Card from "@/components/Card.vue";
  import VStack from "@/components/VStack.vue";
</script>

<template>
  <div class="sidebarView sidebarModeOnly">
    <card>
      <v-stack>
        <img src="/public/images/avatar.jpg" alt="ash's Avatar" class="bigAvatar">
        <h1>ash</h1>
        <h2 class="light">asboy2035</h2>
      </v-stack>
    </card>
  </div>
</template>

<style scoped>
  .sidebarView {
    width: 20rem;
  }
</style>
