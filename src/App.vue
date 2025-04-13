<template>
  <router-view />
  <transition-element ref="cover" />
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import TransitionElement from "@/components/premade/TransitionElement.vue";
  import { useRouter } from "vue-router";

  const cover = ref()
  const router = useRouter()

  onMounted(() => {
    router.beforeEach((to, from, next) => {
      cover.value?.show()
      setTimeout(() => {
        next()
      }, 400)
    })

    router.afterEach(() => {
      setTimeout(() => {
        cover.value?.hide()
      }, 200)
    })
  })
</script>