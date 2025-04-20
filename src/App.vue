<template>
  <transitionable ref="transitionable">
    <router-view />
  </transitionable>
  <transition-element ref="cover" />
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import TransitionElement from "@/components/premade/TransitionElement.vue";
  import { useRouter } from "vue-router";
  import Transitionable from "@/components/premade/Transitionable.vue";

  const cover = ref()
  const transitionable = ref()
  const router = useRouter()

  onMounted(() => {
    router.beforeEach((to, from, next) => {
      transitionable.value?.show()
      cover.value?.show()
      setTimeout(() => {
        next()
      }, 400)
    })

    router.afterEach(() => {
      setTimeout(() => {
        transitionable.value?.hide()
        cover.value?.hide()
      }, 200)
    })
  })
</script>