<script setup lang="ts">
import { useDarkMode } from '@/composables/useDarkMode'

const { isDark } = useDarkMode()
</script>

<template>
  <div :class="isDark ? 'dark' : ''">
    <div
      class="relative antialiased bg-light-lightest scroll-smooth dark:bg-dark-darkest selection:bg-mint dark:selection:bg-lavender selection:text-light-darkest"
    >
      <!-- Gradient Bar-->
      <div class="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-mint to-lavender"></div>

      <!-- Noise -->
      <div
        class="absolute bg-noise inset-0 z-0 bg-center bg-repeat bg-[length:100px_100px] opacity-10 pointer-events-none rendering-pixelated"
      ></div>

      <!-- Content -->
      <div class="min-h-dvh relative z-10 container py-8 md:py-12 mx-auto flex flex-col">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
