<template>
  <transitionable ref="transitionable">
    <router-view />
  </transitionable>
  <transition-element ref="cover" />
  <banner-notification>
    <h-stack>
      <v-stack>
        <h3 class="noMargins">Consider Supporting!</h3>
        <p class="noMargins">Support me on Ko-fi to help development :)</p>
      </v-stack>

      <a href="https://ko-fi.com/asboy2035">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="currentColor" d="M31.844 11.932c-1.032-5.448-6.48-6.125-6.48-6.125H.964C.156 5.807.057 6.87.057 6.87S-.052 16.637.03 22.637c.22 3.228 3.448 3.561 3.448 3.561s11.021-.031 15.953-.067c3.251-.568 3.579-3.423 3.541-4.98c5.808.323 9.896-3.776 8.871-9.219zm-14.751 4.683c-1.661 1.932-5.348 5.297-5.348 5.297s-.161.161-.417.031c-.099-.073-.14-.12-.14-.12c-.595-.588-4.491-4.063-5.381-5.271c-.943-1.287-1.385-3.599-.119-4.948c1.265-1.344 4.005-1.448 5.817.541c0 0 2.083-2.375 4.625-1.281c2.536 1.095 2.443 4.016.963 5.751m8.23.636c-1.24.156-2.244.036-2.244.036V9.714h2.359s2.631.735 2.631 3.516c0 2.552-1.313 3.557-2.745 4.021z"/></svg>
          Ko-fi
        </button>
      </a>
    </h-stack>
  </banner-notification>
  <modal v-if="showDomainTip">
    <h1>You're on the old domain!</h1>
    <p>Access this site at asboy2035.com for a cleaner link!</p>
    <spacer />

    <h-stack class="autospace fullWidth">
      <button @click="showDomainTip = false">
        Later
      </button>

      <a :href="redirectLink">
        <button>
          Take me there!
        </button>
      </a>
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
  import BannerNotification from "@/components/utils/BannerNotification.vue";
  import VStack from "@/components/layout/VStack.vue";

  const showDomainTip = ref(false)
  const redirectLink = `https://asboy2035.com${location.pathname}${location.search}${location.hash}`;

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
