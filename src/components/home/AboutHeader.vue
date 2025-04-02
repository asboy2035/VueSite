<script setup lang="ts">
  import Card from "@/components/Card.vue";
  import VStack from "@/components/VStack.vue";
  import HStack from "@/components/HStack.vue";
</script>

<template>
  <card class="stackModeOnly">
    <h-stack>
      <img src="@/images/avatar.jpg" alt="ash's Avatar" class="bigAvatar">
      <v-stack>
        <h-stack>
          <h1>ash</h1>
          <h1 class="light">asboy2035</h1>
        </h-stack>
      </v-stack>
    </h-stack>
  </card>
</template>
