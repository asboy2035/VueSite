<template>
  <div class="interior">
    <slot />
  </div>
</template>

<style scoped>
  a > .interior {
    width: 100%;
  }

  .interior {
    position: relative;
    --interior-radius: 1.25rem;

    background: var(--foreground-color);
    border-radius: var(--interior-radius);
    padding: 0.75rem;
  }

  .interior::after {
    --shadow-location: ;
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    border: 0.1rem solid var(--text-color);
    box-shadow: var(--shadow-location) 0 0.5rem 0.5rem var(--text-color);
    border-radius: var(--interior-radius);
    opacity: 0.05;
    pointer-events: none;
  }

  ::v-deep(svg) {
    width: 3rem;
    height: 3rem;
  }

  @media (max-width: 35rem) {
    .interior {
      --interior-radius: 1rem;
      padding: 0.75rem;
    }
  }

  @media (prefers-color-scheme: dark) {
    .interior::after{
      --shadow-location: inset;
    }
  }
</style>