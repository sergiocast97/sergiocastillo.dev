<template>
  <main :class="isDark ? 'dark' : ''">
    <div
      class="relative transition bg-light-background scroll-smooth selection:bg-accent selection:text-light-darkest dark:bg-dark-darkest"
    >
      <div class="relative z-10 h-dvh container py-8 md:py-12">
        <div class="h-full mx-auto">
          <div class="flex flex-col justify-between h-full gap-16">
            <header
              class="flex items-start justify-between gap-12 md:items-center"
            >
              <button
                @click="isDark = !isDark"
                title="Toggle Dark Mode"
                class="cursor-pointer"
                id="theme-toggle"
                type="button"
              >
                <div :class="{ hidden: !isDark }">
                  <svg
                    id="theme-toggle-dark-icon"
                    class="text-light-darkest transition size-12 dark:text-dark-white hover:text-secondary dark:hover:text-secondary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                    ></path>
                  </svg>
                </div>
                <div :class="{ hidden: isDark }">
                  <svg
                    id="theme-toggle-light-icon"
                    class="text-light-darkest transition size-12 dark:text-dark-white hover:text-secondary dark:hover:text-secondary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </button>

              <nav
                class="flex flex-col gap-4 md:flex-row md:gap-12 lg:gap-16"
                role="navigation"
              >
                <a
                  v-for="item in nav_items"
                  target="_blank"
                  :key="item.title"
                  :title="item.description"
                  :aria-label="item.description"
                  :href="item.url"
                  class="font-semibold text-light-darkest transition text-2xl lg:text-3xl dark:text-dark-white hover:text-secondary dark:hover:text-secondary"
                >
                  {{ item.title }}
                </a>
              </nav>
            </header>

            <div>
              <h1
                class="text-6xl font-bold text-light-darkest transition md:text-8xl lg:text-9xl dark:text-dark-white"
              >
                Hi I'm Sergio
              </h1>
              <p
                class="mt-4 text-light-dark dark:text-dark-lightest max-w-[48ch] text-base/relaxed md:text-lg/relaxed lg:text-2xl/relaxed"
              >
                I'm a front-end engineer and UI Designer based in Glasgow,
                Scotland. My passion lies in the intersection between design and
                development - I love designing and building things.
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

<script>
export default {
  name: 'App',
  data() {
    return {
      // Detect whether browser is set to Dark Mode
      isDark:
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches,

      // Nav Items
      nav_items: [
        {
          title: 'BlueSky',
          description: 'My Tweets',
          url: 'https://bsky.app/profile/sergiocast97.bsky.social',
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
      ],
    };
  },
};
</script>
