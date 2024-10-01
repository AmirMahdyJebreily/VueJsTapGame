<script setup>
import { ref } from 'vue';

defineProps({
    score: Number
})
const acitve = ref(true)

const sizeRand = (Math.random() * 51) + 144
const paddingRand = (Math.random() * 48)  - 24
setTimeout(() => {acitve.value = false}, 1000)
</script>

<template>
    <span v-if="acitve"
        class="bg-emerald-600/20 rounded-full absolute animate-ping-slow text-center pt-2 pl-6 text-lg font-semibold text-gray-100" :style="`width:${sizeRand}px;height:${sizeRand}px;padding-right:${paddingRand}px`">
        +{{score}}
    </span>
</template>
