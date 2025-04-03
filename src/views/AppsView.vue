<script setup lang="ts">
  import NoCss from "@/components/NoCss.vue";
  import BottomMask from "@/components/BottomMask.vue";
  import Hero from "@/components/Hero.vue";
  import Spacer from "@/components/Spacer.vue";
  import VStack from "@/components/VStack.vue";
  import Navbar from "@/components/Navbar.vue";
  import Grid from "@/components/Grid.vue";
  import Card from "@/components/Card.vue";

  import { useHead } from '@vueuse/head'
  import BottomFooter from "@/components/BottomFooter.vue";

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
          image: "https://tewfa.pages.dev/assets/icon-1024.png",
          link: "https://tewfa.pages.dev/",
          github: "https://github.com/tewFA/tewFA",
        },
        {
          name: "Clocs",
          description: "Keep track of everyone's time.",
          image: "https://clocs.pages.dev/Icons/Icon.png",
          link: "https://clocs.pages.dev/",
          github: "https://github.com/asboy2035/Clocs/",
        },
        {
          name: "Astronomer",
          description: "An app with all the planets :)",
          image: "https://ashtronomy.pages.dev/Images/Astronomy-Icon.png",
          link: "https://ashtronomy.pages.dev/",
          github: "https://github.com/asboy2035/Astronomy/",
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
          image: "./icons/Stand-Icon.png",
          link: "./stand.html",
        },
        {
          name: "BigTime",
          description: "A minimal macOS time tracker.",
          image: "./icons/BigTime-Icon.png",
          link: "#",
          disabled: true,
        },
      ],
    },
  ];
</script>

<template>
  <no-css />
  <bottom-mask />

  <div class="contentView">
    <hero image="/images/Apps.png" image-alt="Apps Header Image">
      <h1>Precisely crafted.</h1>
      <h2>Apps designed with care.</h2>
      <spacer />
      <p>I make apps for web or Mac occasionally.</p>
      <a href="https://github.com/asboy2035?tab=repositories">
        <button>GitHub Repos</button>
      </a>
    </hero>

    <v-stack id="appsContainer">
      <card v-for="category in appsData" :key="category.name">
        <h2>{{ category.name }}</h2>
        <grid class="app-grid">
          <div v-for="app in category.apps" :key="app.name" class="app-card-v2">
            <img :src="app.image" :alt="app.name + ' Logo'" />
            <div class="app-details">
              <h3>{{ app.name }}</h3>
              <p class="light">{{ app.description }}</p>
            </div>
            <div class="app-downloads">
              <a :href="app.link">
                <button :disabled="app.disabled ?? false">
                  {{ app.disabled ? "Soon" : "Go" }}
                </button>
              </a>
              <a v-if="app.github" :href="app.github">
                <button class="transparent">
                  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M7.024 2.31a9 9 0 0 1 2.125 1.046A11.4 11.4 0 0 1 12 3c.993 0 1.951.124 2.849.355a9 9 0 0 1 2.124-1.045c.697-.237 1.69-.621 2.28.032c.4.444.5 1.188.571 1.756c.08.634.099 1.46-.111 2.28C20.516 7.415 21 8.652 21 10c0 2.042-1.106 3.815-2.743 5.043a9.5 9.5 0 0 1-2.59 1.356c.214.49.333 1.032.333 1.601v3a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-.991c-.955.117-1.756.013-2.437-.276c-.712-.302-1.208-.77-1.581-1.218c-.354-.424-.74-1.38-1.298-1.566a1 1 0 0 1 .632-1.898c.666.222 1.1.702 1.397 1.088c.48.62.87 1.43 1.63 1.753c.313.133.772.22 1.49.122L8 17.98a4 4 0 0 1 .333-1.581a9.5 9.5 0 0 1-2.59-1.356C4.106 13.815 3 12.043 3 10c0-1.346.483-2.582 1.284-3.618c-.21-.82-.192-1.648-.112-2.283l.005-.038c.073-.582.158-1.267.566-1.719c.59-.653 1.584-.268 2.28-.031Z"/></g></svg>
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
  .app-card-v2 > img {
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