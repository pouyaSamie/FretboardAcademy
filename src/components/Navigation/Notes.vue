<template>
  <v-card w-100 title="Notes" >

    <template v-slot:text>

      <v-chip-group multiple v-model="selectedNotes" selected-class="text-primary">
        <v-chip v-for="note in Notes" :key="note">
          {{ note }}

        </v-chip>
      </v-chip-group>

    </template>
  </v-card>
</template>
<script setup lang="ts">
import { ref } from 'vue';

let selectedNotes = ref<string[]>(['0', '2', '3', '5', '7', '8', '10']);
let Notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];

</script>