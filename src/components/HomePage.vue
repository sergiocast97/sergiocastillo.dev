<script setup lang="ts">
import { ref } from 'vue'
import { MoonIcon, SunIcon } from '@heroicons/vue/20/solid'

// Detect whether browser is set to Dark Mode
const isDark = ref(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)

// Content
const title = "Hi I'm Sergio"
const copy = `I'm a Software Engineer and UI Designer based in Glasgow, Scotland. 
              I like designing and building stuff on the web - and dinosaurs.`

// Nav Items
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
  <main :class="isDark ? 'dark' : ''">
    <div
      class="relative transition bg-light-background scroll-smooth selection:bg-dark-secondary dark:selection:bg-light-secondary selection:text-light-darkest dark:bg-dark-darkest"
    >
      <div class="relative z-10 h-dvh container py-8 md:py-12">
        <div class="h-full mx-auto">
          <div class="flex flex-col justify-between h-full gap-16">
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
                  class="font-semibold text-light-darkest transition text-2xl lg:text-3xl dark:text-dark-white hover:text-light-secondary dark:hover:text-dark-secondary"
                >
                  {{ item.title }}
                </a>

                <div class="order-first md:order-last">
                  <button
                    @click="isDark = !isDark"
                    title="Toggle Dark Mode"
                    class="cursor-pointer"
                    id="theme-toggle"
                    type="button"
                  >
                    <div :class="{ hidden: !isDark }">
                      <MoonIcon
                        id="theme-toggle-dark-icon"
                        class="text-light-darkest transition size-12 dark:text-dark-white hover:text-light-secondary dark:hover:text-dark-secondary"
                        fill="currentColor"
                      />
                    </div>
                    <div :class="{ hidden: isDark }">
                      <SunIcon
                        id="theme-toggle-light-icon"
                        class="text-light-darkest transition size-12 dark:text-dark-white hover:text-light-secondary dark:hover:text-dark-secondary"
                        fill="currentColor"
                      />
                    </div>
                  </button>
                </div>
              </nav>
            </header>

            <div>
              <h1
                class="text-6xl font-bold text-light-darkest transition md:text-8xl lg:text-9xl dark:text-dark-white"
              >
                {{ title }}
              </h1>
              <p
                class="mt-4 text-light-dark dark:text-dark-lightest max-w-[40ch] text-base/relaxed md:text-lg/relaxed lg:text-2xl/relaxed"
              >
                {{ copy }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="absolute bg-noise inset-0 z-0 bg-center bg-repeat bg-[length:182px_182px] opacity-10 pointer-events-none rendering-pixelated"
      ></div>
    </div>
  </main>
</template>
