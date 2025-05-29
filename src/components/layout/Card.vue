<template>
  <div class="card">
    <slot />
  </div>
</template>

<style scoped lang="sass">
  @use "@/styles/colors"

  .card
    --card-radius: 2.5rem

    width: calc(100% - 3rem)
    position: relative
    align-items: flex-start
    padding: 1.5rem
    flex-grow: 1

    border-radius: var(--card-radius)
    background: colors.$foreground-color
    backdrop-filter: blur(1rem)
    z-index: 2

  ::v-deep(img)
    max-width: 100%
    border-radius: 0.75rem

  .card::before
    content: ""
    position: absolute
    top: 0
    bottom: 0
    right: 0
    left: 0
    padding: 0.5rem

    opacity: 0.2
    border-radius: var(--card-radius)
    background: radial-gradient(circle at top left, colors.$swirly-01, colors.$swirly-02, colors.$swirly-01)
    background-size: 200% 200%
    z-index: -1
    filter: blur(1rem)
    transition: opacity 0.4s ease

  .card:hover::before
    opacity: 0.4
    animation: swirly 10s ease-in-out infinite

  .card::after
    content: ""
    position: absolute
    top: 0
    bottom: 0
    right: 0
    left: 0

    border: 0.1rem solid colors.$text-color
    box-shadow: inset 0 0.5rem 0.5rem colors.$text-color
    border-radius: var(--card-radius)
    opacity: 0.1
    pointer-events: none

  @media (max-width: 35rem)
    .card
      --card-radius: 2rem

      width: calc(100% - 2rem)
      padding: 1rem
</style>