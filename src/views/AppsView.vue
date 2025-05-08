<script setup lang="ts">
  import Hero from "@/components/utils/Hero.vue";
  import Spacer from "@/components/utils/Spacer.vue";
  import VStack from "@/components/layout/VStack.vue";
  import Navbar from "@/components/premade/navbar/Navbar.vue";
  import Grid from "@/components/layout/Grid.vue";
  import Card from "@/components/layout/Card.vue";
  import {Icon} from "@iconify/vue";

  import { useHead } from '@vueuse/head'
  import BottomFooter from "@/components/premade/BottomFooter.vue";
  import AppLink from "@/components/apps/AppLink.vue";
  import DynamicImage from "@/components/utils/DynamicImage.vue";

  useHead({
    title: "ash's Apps",
    meta: [
      { name: "description", content: "My web/Apple apps." },
      { property: "og:title", content: "ash's Apps" },
      { property: "og:description", content: "My web/Apple apps." }
    ]
  })

  interface App {
    name: string;
    description: string;
    image: string;
    link: string;
    disabled?: boolean;
    github?: string;
  }

  interface AppCategory {
    name: string;
    apps: App[];
  }

  const appsData: AppCategory[] = [
    {
      name: "Web Apps",
      apps: [
        {
          name: "tewFA",
          description: "A simple and modern 2FA app.",
          image: "https://tfa.asboy2035.com/assets/icon-1024.png",
          link: "https://tfa.asboy2035.com/",
          github: "https://github.com/tewFA/tewFA",
        },
        {
          name: "Astronomer",
          description: "An app with all the planets :)",
          image: "https://ashtronomy.pages.dev/Images/Astronomy-Icon.png",
          link: "https://ashtronomy.pages.dev/",
          github: "https://github.com/asboy2035/Astronomy/",
        },
        {
          name: "Clocs",
          description: "Keep track of everyone's time.",
          image: "https://clocs.pages.dev/Icons/Icon.png",
          link: "https://clocs.pages.dev/",
          github: "https://github.com/asboy2035/Clocs/",
        },
        {
          name: "Vault",
          description: "A private space for your ideas.",
          image: "https://byteforge-site-3-3.byteforge.pages.dev/Images/Vault-Icon.jpeg",
          link: "/vault/",
          github: "https://github.com/ByteForgeProd/ByteSite/tree/byteforge-site-3.3/vault/",
        },
      ],
    },
    {
      name: "Mac Apps",
      apps: [
        {
          name: "Stand",
          description: "A Mac app for standing desks.",
          image: "/images/icons/Stand-Icon.png",
          link: "./stand",
        },
        {
          name: "BigTime",
          description: "A minimal macOS time tracker.",
          image: "/images/icons/BigTime-Icon.png",
          link: "#",
          disabled: true,
        },
      ],
    },
  ];
</script>

<template>
  <div class="contentView">
    <hero image="/images/Apps.png" image-alt="Apps Header Image">
      <h1>My Apps</h1>
      <h2>I make web/Apple apps.</h2>
      <spacer />

      <a href="https://github.com/asboy2035?tab=repositories">
        <button>
          <Icon icon="mingcute:github-fill" width="24" height="24" />
          All Apps
        </button>
      </a>
    </hero>

    <v-stack id="appsContainer">
      <card v-for="category in appsData" :key="category.name">
        <h2>{{ category.name }}</h2>
        <grid class="app-grid">
          <div v-for="app in category.apps" :key="app.name" class="app-card-v2">
            <div class="app-image">
              <dynamic-image class="app-image" :src="app.image" :alt="app.name + ' Logo'" />
            </div>

            <div class="app-details">
              <h3>{{ app.name }}</h3>
              <p class="light">{{ app.description }}</p>
            </div>

            <div class="app-downloads">
              <app-link :to="app.link" :disabled="app.disabled ?? false" />
              <a v-if="app.github" :href="app.github">
                <button class="transparent">
                  <Icon icon="mingcute:github-fill" width="24" height="24" />
                </button>
              </a>
            </div>
          </div>
        </grid>
      </card>
    </v-stack>

    <p class="light">
      How to install PWAs (iOS): Click/press "Go" and then "Share" then "Add to Home Screen".
    </p>

    <bottom-footer />
    <navbar />
  </div>
</template>

<style scoped>
  #appsContainer {
    width: 100%;
  }
  .app-grid {
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    gap: 0.5rem;
  }
  .app-card-v2 {
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
    padding: 0.5rem 0.75rem;
    align-items: center;

    background: var(--foreground-color);
    border-radius: 1rem;
  }
  .app-image {
    width: 4rem;
    height: 4rem;
    border-radius: 1rem;
  }
  .app-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    flex-grow: 1;
    overflow: scroll;
    text-wrap: nowrap;

    border-radius: 0.5rem;
  }
  .app-downloads {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
  }

  .app-downloads svg {
    height: 1.25rem;
  }
</style>