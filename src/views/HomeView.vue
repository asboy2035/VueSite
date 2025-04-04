<script setup>
  import AboutSidebar from '@/components/home/AboutSidebar.vue'
  import Navbar from '@/components/premade/Navbar.vue'
  import AboutHeader from "@/components/home/AboutHeader.vue";
  import LocationCard from "@/components/home/cards/LocationCard.vue";
  import AboutCard from "@/components/home/cards/AboutCard.vue";
  import Grid from "@/components/layout/Grid.vue";
  import LangsCard from "@/components/home/cards/LangsCard.vue";
  import BottomFooter from "@/components/premade/BottomFooter.vue";
  import NoCss from "@/components/premade/NoCss.vue";
  import BottomMask from "@/components/premade/BottomMask.vue";

  import { useHead } from "@vueuse/head";

  useHead({
    title: 'ash (asboy2035)',
    meta: [
      { name: 'description', content: 'My (new) site :)' },
      { property: 'og:title', content: "ash's Site" },
      { property: 'og:description', content: 'My (new) site :)' }
    ]
  })
</script>

<template>
  <no-css />
  <bottom-mask />

  <div class="navigationView">
    <about-sidebar />
    <div class="contentView">
      <div class="content spaced">
        <about-header />

        <!--More About-->
        <grid class="spaced">
          <about-card />
          <location-card />
        </grid>

        <langs-card />
        <bottom-footer />
      </div>

      <navbar hide-profile />
    </div>
  </div>
</template>
