<script setup lang="ts">
import TopNav from '@/components/TopNav.vue'
import MainLayout from '@/layouts/MainLayout.vue'

const title = "Hi I'm Sergio"
const copy = `I'm a Software Engineer and UI Designer based in Glasgow, Scotland. 
              I like designing and building stuff on the web - and dinosaurs.`
</script>

<template>
  <MainLayout>
    <div class="flex flex-col justify-between h-full gap-16 flex-grow">
      <TopNav />
      <main>
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
      </main>
    </div>
  </MainLayout>
</template>
