<script>
  import DynamicImage from "@/components/utils/DynamicImage.vue"

  export default {
    components: {DynamicImage},
    props: {
      image: String,
      imageAlt: String ?? "Image"
    }
  }
</script>

<template>
  <div class="hero-v2">
    <dynamic-image class="heroResizableImage" :src="image" :alt="imageAlt" />

    <div class="heroText">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="sass">
  .hero-v2
    display: flex
    position: relative
    align-items: flex-start
    justify-content: flex-end
    min-height: fit-content
    height: 75vh
    max-height: 80vw
    width: 100%

  .heroText
    display: flex
    align-items: flex-start
    margin: 1.5rem
    height: fit-content

  ::v-deep(h1)
    font-family: "DM Serif Display", serif
    font-style: italic
    color: white
    font-weight: 200
    font-size: 5rem
    margin: 0 0.25rem

  ::v-deep(h1), ::v-deep(h2), ::v-deep(p)
    color: white

  .hero-v2 .heroResizableImage
    position: absolute
    top: 0
    bottom: 0
    left: 0
    right: 0

    object-fit: cover
    border-radius: 2rem
    width: 100%
    height: 100%
    z-index: -1
    opacity: 0.8

  @media (max-width: 35rem)
    .hero
      height: fit-content
      align-items: flex-start

    .hero-v2
      max-height: 75vh
</style>