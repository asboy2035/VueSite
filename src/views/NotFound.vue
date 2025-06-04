<script setup lang="ts">
  import Grid from "@/components/layout/Grid.vue"
  import Card from "@/components/layout/Card.vue"
  import CardTitle from "@/components/utils/CardTitle.vue"
  import AboutCard from "@/components/home/cards/AboutCard.vue"
  import BottomFooter from "@/components/premade/BottomFooter.vue"
  import Navbar from "@/components/premade/navbar/Navbar.vue"
  import AboutHeader from "@/components/home/AboutHeader.vue"
  import AboutSidebar from "@/components/home/AboutSidebar.vue"
</script>

<template>
  <div class="navigationView">
    <about-sidebar />
    <div class="contentView">
      <div class="content spaced">
        <about-header />
        <grid class="spaced">
          <card class="attention topZ error">
            <h1 class="bigError">404</h1>

            <card-title
              title="This page doesn't exist!"
              icon="solar:danger-triangle-line-duotone"
            />

            <p>You may return to a valid page using the navbar or the about card's links.</p>
          </card>

          <about-card />
        </grid>
        <bottom-footer />
        <navbar />
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
  @use "@/styles/fonts"

  .topZ
    z-index: 10

  .bigError
    font-family: fonts.$prominent
    font-size: 6rem
    width: 100%
    text-align: center

  .error::before
    background: red
</style>
