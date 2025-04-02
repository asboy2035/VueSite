<template>
  <div class="card">
    <slot />
  </div>
</template>

<style scoped>
  .card {
    position: relative;
    width: calc(100% - 3rem);
    align-items: flex-start;
    border-radius: 2rem;
    padding: 1.5rem;
    background: var(--foreground-color);
    z-index: 1;
  }
  a .card {
    width: calc(100% - 1.5rem);
  }
  .card::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 0.5rem;

    opacity: 0.4;
    background: radial-gradient(circle at top left, var(--swirly-01), var(--swirly-02), var(--swirly-03), var(--swirly-04));
    z-index: -1;
    filter: blur(1rem);
    transition: 0.2s ease;
  }
  .card:hover::before {
    opacity: 0.9;
  }

  @media (max-width: 35rem) {
    .card {
      padding: 1rem;
      border-radius: 1.75rem;
      width: calc(100% - 2rem);
    }
  }
</style>