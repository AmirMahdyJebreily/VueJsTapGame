<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Tapper from './components/Main/Tapper.vue';
import ScoreBadge from './components/Header/ScoreBadge.vue'
import { ref } from 'vue';
import { nextTick } from 'vue';
import { GetScoreFromServer, SendScoreToServer } from './api';

const vueScores = ref(GetScoreFromServer());

async function addHandler(score) {
  vueScores.value += score
  await nextTick()
  SendScoreToServer(vueScores.value)
}


</script>

<template>
  <section class="size-full flex flex-col items-center justify-center relative px-6">
    <header class="flex-none flex flex-col items-center justify-between py-6 w-full gap-4">
      <nav class="flex items-center justify-between w-full gap-6">
        <span class="flex flex-col items-start justify-start flex-1">
          <h1 class="font-mono text-2xl text-neutral-200">Tap Vue</h1>
          <p class="font-mono text-neutral-500">Designed with ❤️ by <a class="link" target="_blank" title="See my github ;)"
          href="https://github.com/AmirMahdyJebreily">CodeAgha</a></p>
        </span>
        <a class="flex-none" target="_blank" title="See the Repo" href="https://github.com/AmirMahdyJebreily/VueJsTapGame">
          <img class="size-6 hover:animate-spin-fast" src="./assets/github-mark-white.svg" />
        </a>
      </nav>
      <ScoreBadge class="md:relative -top-14" :Scores="vueScores" />

    </header>


    <main class="size-full flex flex-col items-center justify-center">
      <Tapper @ScoreAdded="addHandler" Logo="vue" />
    </main>
    <footer class="flex-none flex items-center justify-center py-6">
      <a href="/">Home</a>
    </footer>
  </section>
</template>


<style lang="postcss" scoped>
.link {
  @apply text-emerald-500/80 hover:opacity-40 transition-opacity duration-200
}
</style>