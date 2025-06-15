import { createApp } from 'vue'
import App from './App.vue'
import { createHead } from '@vueuse/head'
import { router } from './router'
import '@/styles/global.sass'

const app = createApp(App)
const head = createHead()

router.afterEach((to) => {
  const baseUrl = 'https://asboy2035.com' // 💡 Replace with your real domain
  const canonicalLink = document.querySelector("link[rel='canonical']")

  const fullUrl = baseUrl + to.fullPath

  if (canonicalLink) {
    canonicalLink.setAttribute('href', fullUrl)
  } else {
    const link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    link.setAttribute('href', fullUrl)
    document.head.appendChild(link)
  }
})

app
  .use(router)
  .use(head)
  .mount('#app')