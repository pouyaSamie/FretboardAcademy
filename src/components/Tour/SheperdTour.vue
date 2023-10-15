<template>
  <V-Btn color="yellow" icon="mdi-lightbulb-question-outline" @click="startTour" />
</template>

<script setup lang="ts">

import 'shepherd.js/dist/css/shepherd.css'
import { tour } from './Tour';

function startTour() {
  tour.start();
}

</script>

<style>
.sheperd-container {
  background: #170000;
  border-radius: 25px;
}

.shepherd-text {
  color: white
}

.shepherd-button {
  background: #170000;
  border: 1px solid #ccc;
  padding: 0.4rem 0.7rem;
}
</style>