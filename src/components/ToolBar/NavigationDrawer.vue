<template>
  <v-navigation-drawer scrim v-model="drawer">
    <v-sheet elevation="10" class="py-4 px-1">

      <v-row dense>
        <v-col cols="12">
          <Notes v-model="selectedNotes" />
        </v-col>

        <v-col cols="12">
          <Strings v-model="selectedStrings" />
        </v-col>
      </v-row>

      <v-divider inset></v-divider>

      <v-card>
        <v-row>
          <v-col cols="11" class="my-10">
            <v-slider v-model="frets" :max="24" :step="1" label="Frets" thumb-label="always">
            </v-slider>
          </v-col>
        </v-row>
      </v-card>
    </v-sheet>
  </v-navigation-drawer>
  <v-app-bar>
    <v-app-bar-nav-icon  @click="drawer = !drawer"> </v-app-bar-nav-icon>
    <img src="@/assets/img/logo.png" width="100" height="46" class="ml-3" />
    <v-app-bar-title></v-app-bar-title>
    <p>Score: 10 / 15</p>
    <v-btn target="_blank" href="https://github.com/pouyaSamie/FretboardAcademy" icon>
      <v-icon>mdi-github</v-icon>
    </v-btn>
  </v-app-bar>
</template>
<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';

import Notes from './Notes.vue'
import Strings from './Strings.vue'
import { useGuitarStore } from '@/stores/guitarStore';
const guitarStore = useGuitarStore();
const drawer = ref(false)
const selectedStrings = ref<String[]>(guitarStore.selectedStrings);
const selectedNotes = ref<String[]>(guitarStore.selectedNotes);
const frets = ref<string | number | undefined>(guitarStore.frets);

onMounted(() => {
  selectedStrings.value = guitarStore.selectedStrings;
  selectedNotes.value = guitarStore.selectedNotes;
  frets.value = guitarStore.frets;
});

// Watchers to update store when values change
watch(selectedStrings, (newValue) => {
  guitarStore.updateSelectedStrings(newValue as string[])
});

watch(selectedNotes, (newValue) => {
  guitarStore.updateSelectedNotes(newValue as string[])
});

watch(frets, (newValue) => {
  guitarStore.updateFrets(newValue as number)
});

</script>