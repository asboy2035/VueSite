<script setup lang="ts">
  import Card from "@/components/Card.vue";
  import InteriorItem from "@/components/InteriorItem.vue";
  import Grid from "@/components/Grid.vue";
  import Spacer from "@/components/Spacer.vue";
</script>

<template>
  <card class="spaced">
    <h2>Languages</h2>
    <p>I speak English, French, and a bit of Spanish :)</p>
    <spacer />

    <grid class="tight spaced">
      <interior-item class="centered">
        <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><defs><mask id="ipSHtmlFive0"><g fill="none" stroke-width="4"><path fill="#fff" stroke="#fff" d="M37.804 5H10.196a2 2 0 0 0-1.991 2.187l2.688 28.666a2 2 0 0 0 1.153 1.63l11.116 5.13a2 2 0 0 0 1.676 0l11.116-5.13a2 2 0 0 0 1.154-1.63l2.687-28.666A2 2 0 0 0 37.804 5Z"/><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M32 12H16l1 9h14l-1 11l-6 3l-6-3l-.5-5"/></g></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSHtmlFive0)"/></svg>
        <p>HTML</p>
      </interior-item>

      <interior-item class="centered">
        <svg width="48" height="48" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M3.75 5.25a1.5 1.5 0 0 1 1.5-1.5h11.5a3.5 3.5 0 0 1 3.5 3.5v9.5a3.5 3.5 0 0 1-3.5 3.5h-9.5a3.5 3.5 0 0 1-3.5-3.5z"/><path d="M9.25 17.25h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1m4 0h-1a1 1 0 0 0-1 1v.5a1 1 0 0 0 1 1v0a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1h-1m6-5h-1a1 1 0 0 0-1 1v.5a1 1 0 0 0 1 1v0a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1h-1"/></g></svg>
        <p>CSS</p>
      </interior-item>

      <interior-item class="centered">
        <svg width="48" height="48" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm7.334 13.055q1.08.87 2.156.858q.66 0 1.012-.242a.75.75 0 0 0 .341-.66a.97.97 0 0 0-.34-.748q-.352-.307-1.332-.616q-1.177-.34-1.815-.88q-.626-.54-.638-1.507q0-.913.792-1.529q.77-.616 1.97-.616q1.672 0 2.683.814l-.77 1.199a2.6 2.6 0 0 0-.935-.462a3.2 3.2 0 0 0-.946-.165q-.57 0-.913.209q-.34.21-.34.55q0 .374.417.638q.42.254 1.43.561q1.221.363 1.738.968t.517 1.54q0 .957-.737 1.65q-.726.682-2.112.715q-1.815 0-3.036-1.089zm-5.53.638q.352.22.847.22q.517 0 .858-.297q.34-.308.341-1.067v-5.302h1.485v5.588q-.033 1.298-.748 1.87a2.5 2.5 0 0 1-.891.484a3.3 3.3 0 0 1-.935.143q-.825 0-1.463-.286q-.682-.307-1.144-1.089l1.034-.847q.285.385.616.583"/></svg>
        <p>JS</p>
      </interior-item>

      <interior-item class="centered">
        <svg width="48" height="48" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M22 7.563v-.579c0-.45-.032-.868-.129-1.318c-.032-.45-.225-.868-.418-1.222c-.418-.772-1.029-1.447-1.865-1.865c-.418-.193-.803-.354-1.254-.418c-.45-.032-.868-.129-1.318-.129H6.695c-.354 0-.644.032-.997.097a3.6 3.6 0 0 0-.965.257c-.096.032-.225.096-.321.129a8 8 0 0 0-.804.61c-.097.033-.161.13-.29.226a4.8 4.8 0 0 0-.771 1.028c-.193.419-.354.804-.418 1.255c-.065.45-.097.868-.129 1.318v10.032c0 .45.032.868.129 1.318c.032.45.225.869.418 1.254c.418.804 1.029 1.447 1.865 1.865c.418.193.803.354 1.254.418c.45.033.868.129 1.318.129h10.033c.45 0 .867-.032 1.317-.129c.45-.032.869-.225 1.254-.418c.772-.418 1.447-1.029 1.865-1.865c.193-.418.354-.803.418-1.254c.065-.45.129-.868.129-1.318zM18.881 18.27c-.9-1.704-2.54-1.318-3.376-.868a.7.7 0 0 1-.225.129h-.065c-1.704.964-4.115.996-6.463-.032a10.7 10.7 0 0 1-4.662-4.02a7.5 7.5 0 0 0 1.769 1.03c2.54 1.189 5.016 1.092 6.816 0c-2.54-1.93-4.598-4.47-6.27-6.496a10 10 0 0 1-.868-1.125c1.93 1.768 5.016 4.019 6.11 4.598c-2.348-2.444-4.374-5.53-4.31-5.37c3.666 3.698 7.042 5.82 7.042 5.82c.129.032.226.128.322.193c.032-.193.129-.354.193-.547c.579-2.122-.032-4.598-1.543-6.592c3.44 2.026 5.434 5.917 4.598 9.229c-.033.032-.033.128-.033.225c1.64 1.961 1.19 4.212.965 3.826"/></svg>
        <p>Swift (Learning)</p>
      </interior-item>
    </grid>
  </card>
</template>

<style scoped>

</style>