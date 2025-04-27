<script setup lang="ts">
  import VStack from "@/components/layout/VStack.vue";
  import Card from "@/components/layout/Card.vue";
  import SitePick from "@/components/premade/navbar/SitePick.vue";
</script>

<template>
  <card class="sitePicker">
    <v-stack>
      <h2>Sites</h2>

      <router-link to="/">
        <site-pick title="Portfolio">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M8.25 6.015V5a3.75 3.75 0 1 1 7.5 0v1.015c1.287.039 2.075.177 2.676.676c.833.692 1.053 1.862 1.492 4.203l.75 4c.617 3.292.925 4.938.026 6.022C19.794 22 18.119 22 14.77 22H9.23c-3.35 0-5.024 0-5.924-1.084s-.59-2.73.026-6.022l.75-4c.44-2.34.659-3.511 1.492-4.203c.601-.499 1.389-.637 2.676-.676M9.75 5a2.25 2.25 0 0 1 4.5 0v1h-4.5zM9 13.197c0 .984 1.165 2.024 2.043 2.669c.42.308.63.462.957.462c.328 0 .537-.154.957-.462c.878-.645 2.043-1.685 2.043-2.67c0-1.672-1.65-2.297-3-1.005c-1.35-1.292-3-.668-3 1.006" clip-rule="evenodd"/></svg>
        </site-pick>
      </router-link>

      <a href="https://guide.asboy2035.com/">
        <site-pick title="Guides">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7.5 22q-1.45 0-2.475-1.025T4 18.5v-13q0-1.45 1.025-2.475T7.5 2H18q.825 0 1.413.587T20 4v12.525q0 .2-.162.363t-.588.362q-.35.175-.55.5t-.2.75t.2.763t.55.487t.55.413t.2.562v.25q0 .425-.288.725T19 22zM9 15q.425 0 .713-.288T10 14V5q0-.425-.288-.712T9 4t-.712.288T8 5v9q0 .425.288.713T9 15m-1.5 5h9.325q-.15-.35-.237-.712T16.5 18.5q0-.4.075-.775t.25-.725H7.5q-.65 0-1.075.438T6 18.5q0 .65.425 1.075T7.5 20"/></svg>
        </site-pick>
      </a>
    </v-stack>
  </card>
</template>

<style>
  .sitePicker {
    max-width: fit-content;
  }

  .sitePicker.fullWidth {
    max-width: 100%;
  }
</style>
