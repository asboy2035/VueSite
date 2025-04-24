<template>
  <transitionable ref="transitionable">
    <router-view />
  </transitionable>
  <transition-element ref="cover" />
  <modal v-if="showDomainTip">
    <h1>You're on the old domain!</h1>
    <p>Access this site at asboy2035.com for a cleaner link!</p>
    <spacer />

    <h-stack class="autospace fullWidth">
      <a href="https://asboy2035.com">
        <button>
          Got it, take me there!
        </button>
      </a>

      <button @click="showDomainTip = false">
        Later
      </button>
    </h-stack>
  </modal>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import TransitionElement from "@/components/premade/TransitionElement.vue";
  import { useRouter } from "vue-router";
  import Transitionable from "@/components/premade/Transitionable.vue";
  import Modal from "@/components/utils/Modal.vue";
  import Spacer from "@/components/utils/Spacer.vue";
  import HStack from "@/components/layout/HStack.vue";

  const showDomainTip = ref(false)

  const cover = ref()
  const transitionable = ref()
  const router = useRouter()

  if (location.hostname.includes('pages.dev')) {
    showDomainTip.value = true
  }

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
