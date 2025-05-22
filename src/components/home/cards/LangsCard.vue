<script setup lang="ts">
  import Card from "@/components/layout/Card.vue"
  import InteriorItem from "@/components/layout/InteriorItem.vue"
  import Grid from "@/components/layout/Grid.vue"
  import Spacer from "@/components/utils/Spacer.vue"
  import {Icon} from "@iconify/vue"
</script>

<template>
  <card class="spaced">
    <h2>Languages</h2>
    <p>I speak English, French, and a bit of Spanish :)</p>
    <spacer />

    <grid class="tight spaced">
      <interior-item class="centered langCard">
        <Icon icon="mingcute:vue-fill" width="24" height="24" />
        <p>VueJS</p>
      </interior-item>

      <interior-item class="centered langCard">
        <Icon icon="proicons:css-2" width="24" height="24" />
        <p>CSS</p>
      </interior-item>

      <interior-item class="centered langCard">
        <Icon icon="fluent:javascript-16-regular" width="16" height="16" />
        <p>JS</p>
      </interior-item>

      <interior-item class="centered langCard">
        <Icon icon="iconoir:apple-swift" width="24" height="24" />
        <p>Swift (Learning)</p>
      </interior-item>
    </grid>
  </card>
</template>

<style scoped>
  .langCard > ::v-deep(svg) {
    width: 3rem;
    height: 3rem;
  }
</style>