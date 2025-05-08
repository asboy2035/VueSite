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
    transition: 0.2s ease;
  }

  .interior::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    border: 0.1rem solid var(--text-color);
    box-shadow: 0 0.5rem 0.5rem var(--text-color);
    border-radius: var(--interior-radius);
    opacity: 0.05;
    pointer-events: none;
    transition: 0.1s ease;
  }

  .interior:hover {
    transform: translateY(-0.5rem);
  }
  .interior:hover::after {
    box-shadow: 0 1rem 0.75rem var(--text-color);
  }

  .interior:active {
    transform: translateY(-0.15rem);
  }
  .interior:active::after {
    box-shadow: 0 0.35rem 0.55rem var(--text-color);
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
</style>