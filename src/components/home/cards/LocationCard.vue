<script setup lang="ts">
  import Card from "@/components/layout/Card.vue"
  import DynamicImage from "@/components/utils/DynamicImage.vue"
  import InteriorItem from "@/components/layout/InteriorItem.vue";
</script>

<template>
  <card class="autospace">
    <h2>Bordeaux, FR</h2>
    <interior-item>
      <dynamic-image class="locationImage" src="/images/Bordeaux.webp" alt="Place de la Bourse, Bordeaux, France" />
    </interior-item>
  </card>
</template>

<style scoped>
  .locationImage {
    border-radius: 0.25rem;
  }
</style>
