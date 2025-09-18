<script setup lang="ts">
import DarkModeToggle from './DarkModeToggle.vue'

interface navItem {
  title: string
  description: string
  url: string
}

const navItems: navItem[] = [
  {
    title: 'BlueSky',
    description: 'My Tweets',
    url: 'https://bsky.app/profile/sergiocastillo.dev',
  },
  {
    title: 'LinkedIn',
    description: 'My Work',
    url: 'https://www.linkedin.com/in/sergiocast97',
  },
  {
    title: 'GitHub',
    description: 'My Code',
    url: 'https://github.com/sergiocast97/',
  },
  {
    title: 'Behance',
    description: 'My Designs',
    url: 'https://www.behance.net/sergiocast97',
  },
]
</script>
<template>
  <header class="flex justify-end">
    <nav
      class="flex items-end flex-col gap-4 md:flex-row md:gap-12 lg:gap-16 md:items-center"
      role="navigation"
    >
      <a
        v-for="item in navItems"
        target="_blank"
        :key="item.title"
        :title="item.description"
        :aria-label="item.description"
        :href="item.url"
        class="font-semibold text-light-darkest transition-all duration-150 text-2xl lg:text-3xl dark:text-dark-white hover:text-mint dark:hover:text-lavender hover:scale-105 active:scale-95"
      >
        {{ item.title }}
      </a>

      <div class="order-first md:order-last">
        <DarkModeToggle />
      </div>
    </nav>
  </header>
</template>
