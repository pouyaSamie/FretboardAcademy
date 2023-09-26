<template>
  <v-card title="Strings" >

    <template v-slot:text>

      <v-chip-group multiple v-model="selectedStrings" selected-class="text-primary">
        <v-chip v-for="string in strings" :key="string">
          {{ string }}

        </v-chip>
      </v-chip-group>

    </template>
  </v-card>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const selectedStrings = ref<string[]>(['0', '1', '2', '3', '4', '5']);
const strings = ['high-E', 'B', 'G', 'D', 'A', 'low-E'];

</script>