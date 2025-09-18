<script setup lang="ts">
import { useDarkMode } from '@/composables/useDarkMode'

const { isDark } = useDarkMode()
</script>

<template>
  <main :class="isDark ? 'dark' : ''">
    <div
      class="relative transition bg-light-lightest scroll-smooth dark:bg-dark-darkest selection:bg-dark-secondary dark:selection:bg-light-secondary selection:text-light-darkest"
    >
      <div class="relative z-10 h-dvh container py-8 md:py-12">
        <div class="h-full mx-auto">
          <slot></slot>
        </div>
      </div>
    </div>
    <div
      class="absolute bg-noise inset-0 z-0 bg-center bg-repeat bg-[length:182px_182px] opacity-10 pointer-events-none rendering-pixelated"
    ></div>
  </main>
</template>
