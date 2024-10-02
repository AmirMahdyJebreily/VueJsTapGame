<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Tapper from './components/Main/Tapper.vue';
import { ref } from 'vue';
import { nextTick } from 'vue';

const scoresKey = "scores"
const vueSores = ref(0);
if (window.localStorage.getItem(scoresKey) != undefined){
  vueSores.value =  Number(window.localStorage.getItem(scoresKey))
}
else{
  window.localStorage.setItem(scoresKey,vueSores.value)
}

async function addHandler(score){
  vueSores.value += score
  await nextTick()
  window.localStorage.setItem(scoresKey,vueSores.value)
}


</script>

<template>
  <section class="size-full flex flex-col items-center justify-center relative">
    <header class="flex-none flex items-center justify-center py-6"> 
      <span class="score-badge">
        <img alt="Vue logo" class="size-6 grayscale opacity-75" src="@/assets/Logo.svg" /> {{ vueSores }}
      </span>
    </header>

    <main class="size-full flex flex-col items-center justify-center">
      <Tapper @ScoreAdded="addHandler" Logo="vue"/>
    </main>
  </section>
</template>


<style lang="postcss" scoped>
.score-badge {
  @apply border-2 border-neutral-900 bg-gradient-to-t from-neutral-900 via-neutral-700/5 to-neutral-950/20 flex items-center justify-center text-gray-100 text-xl font-semibold py-1 px-2 gap-2 font-mono rounded-lg
}
</style>