<template>
  <v-card title="Strings" >

    <template v-slot:text>

      <v-chip-group multiple v-model="Currentstrings" selected-class="text-primary">
        <v-chip v-for="string in strings" :value="string" :key="string">
          {{ string }}

        </v-chip>
      </v-chip-group>

    </template>
  </v-card>
</template>
<script setup lang="ts">
import { watch,ref } from 'vue';


const { modelValue } = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);
const Currentstrings = ref<string[]>(modelValue);

const strings = ['high-E', 'B', 'G', 'D', 'A', 'low-E'];

// Watch for changes in childValue and emit them
watch(Currentstrings, (newValue) => {
  emit('update:modelValue', newValue);
});
</script>