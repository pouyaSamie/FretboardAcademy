<template>
  <v-card w-100 title="Notes" >

    <template v-slot:text>

      <v-chip-group multiple v-model="CurrentNotes" selected-class="text-primary">
        <v-chip v-for="note in Notes" :value="note" :key="note">
          {{ note }}

        </v-chip>
      </v-chip-group>

    </template>
  </v-card>
</template>
<script setup lang="ts">
import { watch,ref } from 'vue';

// let selectedNotes = ref<string[]>(['0', '2', '3', '5', '7', '8', '10']);
let Notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];

const { modelValue } = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);
const CurrentNotes = ref<string[]>(modelValue);

watch(CurrentNotes, (newValue) => {
  emit('update:modelValue', newValue);
});
</script>