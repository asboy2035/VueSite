import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevtools from 'vite-plugin-vue-devtools'
import path from 'path'
import {VitePWA} from "vite-plugin-pwa"

export default defineConfig({
  plugins: [
    vue(),
    vueDevtools(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['.'],
      manifest: {
        name: 'asboy2035 ∙ Portfolio',
        short_name: 'ash ∙ Port',
        description: 'My personal portfolio.',
        theme_color: '#9f75e8',
        icons: [
          {
            src: '/images/avatar.png',
            sizes: '1820x1820',
            type: 'image/png'
          },
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    host: '0.0.0.0'
  }
})
