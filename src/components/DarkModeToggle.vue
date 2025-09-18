<script setup lang="ts">
import { MoonIcon, SunIcon } from '@heroicons/vue/20/solid'
import { useDarkMode } from '@/composables/useDarkMode'

const { isDark, toggleDark } = useDarkMode()
const iconClass = 'text-light-darkest transition-all duration-150 size-10 dark:text-dark-white'
</script>

<template>
  <button
    @click="toggleDark()"
    title="Toggle Dark Mode"
    class="cursor-pointer transition-all duration-150 hover:scale-110 active:scale-95"
    id="theme-toggle"
    type="button"
  >
    <div :class="{ hidden: !isDark }">
      <MoonIcon id="theme-toggle-dark-icon" :class="iconClass" fill="currentColor" />
    </div>
    <div :class="{ hidden: isDark }">
      <SunIcon id="theme-toggle-light-icon" :class="iconClass" fill="currentColor" />
    </div>
  </button>
</template>
