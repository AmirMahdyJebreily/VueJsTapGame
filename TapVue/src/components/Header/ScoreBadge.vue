<script setup>
defineProps({
    Scores:Number
})
</script>
<template>
    <span class="score-badge">
        <img alt="Vue logo" class="size-6 grayscale opacity-75" src="@/assets/Logo.svg" /> {{ Scores }}
    </span>
</template>

<style lang="postcss" scoped>
.score-badge {
    @apply border-2 border-neutral-900 bg-gradient-to-t from-neutral-900 via-neutral-700/5 to-neutral-950/20 flex items-center justify-center text-gray-100 text-xl font-semibold py-1 px-2 gap-2 font-mono rounded-lg
}
</style>