<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  to: string
  disabled?: boolean
  label?: string
}>()

const isExternal = computed(() => {
  return /^https?:\/\//.test(props.to)
})
</script>

<template>
  <component
    :is="isExternal ? 'a' : 'router-link'"
    :href="isExternal ? to : undefined"
    :to="!isExternal ? to : undefined"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
    class="app-link"
  >
    <button :disabled="disabled ?? false">
      {{ disabled ? 'Soon' : (label ?? 'Go') }}
    </button>
  </component>
</template>