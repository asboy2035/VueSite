<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import { useHead } from '@vueuse/head'
  import { computed } from 'vue'
  import InteriorItem from "@/components/layout/InteriorItem.vue";
  import AppleMusic from "@/components/playlists/AppleMusic.vue";
  import Spotify from "@/components/playlists/Spotify.vue";
  import Deezer from "@/components/playlists/Deezer.vue";
  import LinkIcon from "@/components/apps/LinkIcon.vue";
  import YoutubeMusic from "@/components/playlists/YoutubeMusic.vue";
  import Card from "@/components/layout/Card.vue";
  import HStack from "@/components/layout/HStack.vue";
  import VStack from "@/components/layout/VStack.vue";
  import Spacer from "@/components/utils/Spacer.vue";
  import Grid from "@/components/layout/Grid.vue";
  import Navbar from "@/components/premade/navbar/Navbar.vue";
  import Hero from "@/components/utils/Hero.vue";

  interface PlaylistLink {
    title: string
    url: string
    type: 'apple' | 'spotify' | 'deezer' | 'youtube'
  }

  interface Playlist {
    slug: string
    title: string
    description: string
    author: string
    image: string
    links: PlaylistLink[]
  }

  const playlists: Playlist[] = [
    {
      slug: 'topsongs',
      title: 'Top Songs',
      description: 'My most favorite songs.',
      author: 'ash.',
      image: 'https://cdn-images.dzcdn.net/images/playlist/d78fafe72bbeb15fa6bba59373492db4/500x500-000000-80-0-0.jpg',
      links: [
        { title: 'Apple', url: 'https://music.apple.com/us/playlist/top-songs/pl.u-leyl2WASMo634Ym', type: 'apple' },
        { title: 'Spotify', url: 'https://open.spotify.com/playlist/7aOCrHrA8N7CKj8jhT2o9F', type: 'spotify' },
        { title: 'Deezer', url: 'https://www.deezer.com/en/playlist/13650302661', type: 'deezer' },
        { title: 'YouTube', url: 'https://music.youtube.com/playlist?list=PLFsL-Utna_XG8xPD5T1vD0hjaesh-cKiw', type: 'youtube' },
      ]
    }
  ]

  const route = useRoute()
  const playlist = computed(() => playlists.find(p => p.slug === route.params.slug))

  function getIconComponent(type: string) {
    switch (type) {
      case 'apple':
        return AppleMusic
      case 'spotify':
        return Spotify
      case 'deezer':
        return Deezer
      case 'youtube':
        return YoutubeMusic
      default:
        return LinkIcon
    }
  }

  if (playlist.value) {
    useHead({
      title: `${playlist.value.title} (Playlist)`,
      meta: [
        { name: 'description', content: playlist.value.description },
        { property: 'og:title', content: `${playlist.value.title} (Playlist)` },
        { property: 'og:description', content: playlist.value.description }
      ],
      link: [
        { rel: 'icon', href: playlist.value.image }
      ]
    })
  }
</script>

<template>
  <div v-if="playlist" class="contentView">
    <hero image="/images/Playlists.jpg">
      <h1>{{ playlist.title }}</h1>
    </hero>

    <card class="spaced">
      <h-stack class="spaced">
        <img class="playlistArt" :src="playlist.image" :alt="`${playlist.title} playlist cover`" />
        <v-stack>
          <h3 class="light">by {{ playlist.author }}</h3>
          <p class="light">{{ playlist.description }}</p>
        </v-stack>
      </h-stack>
      <spacer />

      <h2>Stream</h2>
      <p class="light">Where to stream {{ playlist.title }}:</p>

      <grid class="tight spaced">
        <a
          v-for="link in playlist.links"
          :key="link.type"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
        >
          <interior-item class="centered">
            <component :is="getIconComponent(link.type)" class="icon" />
            <p>{{ link.title }}</p>
          </interior-item>
        </a>
      </grid>
    </card>

    <navbar>
      <router-link to="/links/">
        <button>
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l6 6m-6-6l6-6"/></svg>
          Links
        </button>
      </router-link>
    </navbar>
  </div>
</template>

<style scoped>
  .playlistArt {
      width: 14rem;
  }
</style>
