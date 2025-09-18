<script setup lang="ts">
import { MoonIcon, SunIcon } from '@heroicons/vue/20/solid'
import { useDarkMode } from '@/composables/useDarkMode'

const { isDark, toggleDark } = useDarkMode()
</script>

<template>
  <button
    @click="toggleDark()"
    title="Toggle Dark Mode"
    class="cursor-pointer transition hover:scale-110 active:scale-95"
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
</template>
