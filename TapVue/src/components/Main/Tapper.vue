<script setup>
import { ref, nextTick } from "vue"
import TapperScore from "./Tapper.Score.vue";

const scores = ref([])
const emits = defineEmits(['ScoreAdded'])
let lastw = 0

async function TapHandle() {
    if(lastw <= 10){
        if (scores.value.length > 80) {
            await nextTick()
            scores.value = []
        }
        lastw++
        scores.value.push(1)
        emits("ScoreAdded", 1)
    }
    else{
        lastw = 0
    }

}


</script>

<template>
    <span class="logo-back" id="tapper" @click="TapHandle">
        <TapperScore v-for="score in scores" :score="score" />
        <img alt="Vue logo" class="size-8/12 absolute pt-5 opacity-75" src="@/assets/logo.svg" />
    </span>
</template>

<style lang="postcss" scoped>
.logo-back {
    @apply border-2 border-neutral-900/30 bg-gradient-to-t from-neutral-900 via-neutral-700/5 to-neutral-950/20 relative size-52 rounded-full flex items-center justify-center
}
</style>