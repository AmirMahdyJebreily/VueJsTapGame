<script setup>
import { ref, nextTick } from "vue"
import TapperScore from "./Tapper.Score.vue";
import { shallowRef } from "vue";

const scores = ref([])
const start = ref(false)

const randscale = ref(1)
const grayClass = ref("grayscale")
const emits = defineEmits(['ScoreAdded'])

let lastw = 0

async function TapHandle() {
    start.value = true
    if (lastw <= 10) {
        if (scores.value.length > 80) {
            scores.value = []
        }
        lastw++
        scores.value.push(1)

        randscale.value = (Math.random() * 0.05) + 0.95
        grayClass.value = "scale-95"
        await nextTick()
        emits("ScoreAdded", 1)
        setTimeout(async () => {
            randscale.value = 1
            await nextTick();
            grayClass.value = "grayscale"
        }, 80)
    }
    else {
        lastw = 0
    }

}


</script>

<template>
    <span class="logo-back" id="tapper" @click="TapHandle" :style="`transform: scale(${randscale})`">
        <TapperScore v-for="score in scores" :score="score" />
        <img alt="Vue logo" :class="`size-8/12 absolute pt-5 opacity-45 select-none ${grayClass}`"
            src="@/assets/Logo.svg"/>
        <span v-if="!start" class="font-mono font-black text-lg absolute -bottom-10 text-neutral-300 z-50 animate-pulse">Tap On VueJS Icon !</span>
    </span>
    
</template>

<style lang="postcss" scoped>
.logo-back {
    @apply border-2 border-neutral-900/30 backdrop-blur bg-gradient-to-t from-neutral-900 via-neutral-700/5 to-neutral-950/20 relative size-52 rounded-full flex items-center justify-center transition-transform duration-75
}
</style>