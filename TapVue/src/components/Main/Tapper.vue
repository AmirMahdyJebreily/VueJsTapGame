<script setup>
import {ref} from "vue"

const classes = ref("")
const TapClasses = "size-36 animate-ping-slow"

function TapHandle() {
    console.log("tap reg");
    
    classes.value = TapClasses
    setTimeout(() => {
        classes.value = ""
    },1100)
}

</script>

<template>
    <section class="size-full flex items-center justify-center" id="tapper" @click="TapHandle">
        <span class="logo-back">
          <span @class="`bg-emerald-600/30 rounded-full ${classes} text-center pt-2 text-lg font-semibold text-gray-100`">
            +1
          </span>
          <img alt="Vue logo" class="size-8/12 absolute pt-5" src="@/assets/logo.svg" />
        </span>
      </section>
</template>

<style lang="postcss" scoped>
.logo-back {
  @apply border-2 border-neutral-900/20 bg-gradient-to-t from-neutral-900 via-neutral-700/5 to-neutral-950/20 relative size-52 rounded-full flex items-center justify-center shadow-lg shadow-neutral-800/70
}
</style>