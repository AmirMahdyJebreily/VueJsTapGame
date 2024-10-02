<script setup>
import { ref, nextTick } from "vue"
import TapperScore from "./Tapper.Score.vue";

const scores = ref([])
const randscale = ref(1)
const emits = defineEmits(['ScoreAdded'])
let lastw = 0

async function TapHandle() {
    if(lastw <= 10){
        if (scores.value.length > 80) {
            scores.value = []
        }
        lastw++
        scores.value.push(1)
        
        randscale.value = (Math.random() * 0.125) + 0.925
        await nextTick()
        emits("ScoreAdded", 1)
        setTimeout(() => {
            randscale.value = 1
        }, 80)
    }
    else{
        lastw = 0
    }

}


</script>

<template>
    <span class="logo-back" id="tapper" @click="TapHandle" :style="`transform: scale(${randscale})`">
        <TapperScore v-for="score in scores" :score="score" />
        <img alt="Vue logo" class="size-8/12 absolute pt-5 opacity-60 bg-blend-overlay" src="@/assets/logo.svg" />
    </span>
</template>

<style lang="postcss" scoped>
.logo-back {
    @apply border-2 border-neutral-900/30 backdrop-blur bg-gradient-to-t from-neutral-900 via-neutral-700/5 to-neutral-950/20 
    relative size-52 rounded-full flex items-center justify-center transition-transform duration-75
}
</style>