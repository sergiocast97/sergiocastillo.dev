<template>
    <main :class="isDark ? 'dark' : ''">
        <div class="transition bg-white scroll-smooth dark:bg-black">
            <div class="h-screen p-8 sm:p-12 lg:p-16">
                <div class="h-full max-w-screen-xl mx-auto">
                    <div class="flex flex-col justify-between h-full gap-16">

                        <header class="flex items-start justify-between gap-12 sm:items-center">

                            <button @click="isDark = !isDark" title="Toggle Dark Mode" class="cursor-pointer" id="theme-toggle" type="button">
                                <div :class="isDark ? '' : 'hidden'"><svg id="theme-toggle-dark-icon" class="w-6 h-6 text-black transition sm:h-8 sm:w-8 xl:w-12 xl:h-12 dark:text-white hover:text-primary dark:hover:text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg></div>
                                <div :class="isDark ? 'hidden' : ''"><svg id="theme-toggle-light-icon" class="w-6 h-6 text-black transition sm:h-8 sm:w-8 xl:w-12 xl:h-12 dark:text-white hover:text-primary dark:hover:text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path></svg></div>
                            </button>

                            <nav class="flex flex-col gap-2 sm:flex-row sm:gap-12 xl:gap-16">
                                <a class="text-lg font-semibold text-black transition sm:text-2xl xl:text-4xl dark:text-white hover:text-primary dark:hover:text-secondary" title="My Designs" href="https://www.behance.net/sergiocast97">Behance</a>
                                <a class="text-lg font-semibold text-black transition sm:text-2xl xl:text-4xl dark:text-white hover:text-primary dark:hover:text-secondary" title="My Code" href="https://github.com/sergiocast97/">GitHub</a>
                                <a class="text-lg font-semibold text-black transition sm:text-2xl xl:text-4xl dark:text-white hover:text-primary dark:hover:text-secondary" title="My Work" href="https://www.linkedin.com/in/sergiocast97">LinkedIn</a>
                                <a class="text-lg font-semibold text-black transition sm:text-2xl xl:text-4xl dark:text-white hover:text-primary dark:hover:text-secondary" title="My Retweets" href="https://twitter.com/sergiocast97">Twitter</a>
                            </nav>

                        </header>

                        <h1 class="mb-16 text-3xl font-bold leading-normal text-black transition sm:mb-0 sm:text-5xl xl:text-7xl dark:text-white">
                            Hello. I am <span class="leading-normal text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary">Sergio</span>.
                            <br>
                            I do stuff.
                        </h1>

                    </div>
                </div>
            </div>
        </div>        
    </main>
</template>

<script>

    export default {
        name: 'App',
        data(){
            return {
                // Detect whether browser is set to Dark Mode
                isDark: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches,
            }
        }
    }

</script>