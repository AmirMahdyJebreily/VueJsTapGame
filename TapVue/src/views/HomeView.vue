<script setup>
import Tapper from '../components/Main/Tapper.vue';

import { ref } from 'vue';
import { nextTick } from 'vue';
import { Scores, SendScoreToServer } from '../api';

async function addHandler(score) {
  Scores.value += score
  await nextTick()
  SendScoreToServer()
}

</script>
<template>
    <Tapper @ScoreAdded="addHandler"/>
</template>