<script setup lang="ts">
  import HStack from "@/components/layout/HStack.vue"
  import NavigationButton from "@/components/premade/navbar/NavigationButton.vue"
  import { Icon } from "@iconify/vue";
</script>

<template>
  <h-stack class="tight">
    <navigation-button link="/links" aria-label="ash's Links">
      <Icon icon="solar:link-minimalistic-2-line-duotone" />
    </navigation-button>

    <navigation-button link="/apps/" aria-label="ash's Apps">
      <Icon icon="solar:widget-2-line-duotone" width="24" height="24" />
    </navigation-button>

    <navigation-button link="/goodies/" aria-label="Goodies">
      <Icon icon="solar:inbox-line-line-duotone" width="24" height="24" />
    </navigation-button>
  </h-stack>
</template>
