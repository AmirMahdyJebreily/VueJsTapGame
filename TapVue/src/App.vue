<script setup>
import { RouterLink, RouterView } from 'vue-router'
import ScoreBadge from './components/Header/ScoreBadge.vue'
import HomeIcon from './components/icons/HomeIcon.vue';



</script>

<template>
  <section class="size-full flex flex-col items-center justify-center relative px-6">
    <header class="flex-none flex flex-col items-center justify-between py-6 w-full gap-4">
      <nav class="flex items-center justify-between w-full gap-6">
        <span class="flex flex-col items-start justify-start flex-1">
          <h1 class="font-mono text-2xl text-neutral-200">Tap Vue</h1>
          <p class="font-mono text-neutral-500">Designed with ❤️ by <a class="link" target="_blank"
              title="See my github ;)" href="https://github.com/AmirMahdyJebreily">CodeAgha</a></p>
        </span>
        <a class="flex-none" target="_blank" title="See the Repo"
          href="https://github.com/AmirMahdyJebreily/VueJsTapGame">
          <img class="size-6 hover:animate-spin-fast" src="./assets/github-mark-white.svg" />
        </a>
      </nav>
      <ScoreBadge class="md:relative -top-14" />

    </header>


    <main class="size-full flex flex-col items-center justify-center">
      <RouterView />
    </main>
    <footer class="flex-none flex items-center justify-center py-6">
      <RouterLink to="/">
        <span class="text-neutral-400 hover:text-neutral-300 font-mono transition-colors duration-200 flex flex-col justify-center items-center bg-neutral-900 py-4 px-6 rounded-xl border-2 border-neutral-700/45"> 
          <HomeIcon />
          <span>Home</span>
        </span>
      </RouterLink>
    </footer>
  </section>
</template>


<style lang="postcss" scoped>
.link {
  @apply text-emerald-500/80 hover:opacity-40 transition-opacity duration-200
}
</style>