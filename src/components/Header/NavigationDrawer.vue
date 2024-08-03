<template>
  <v-navigation-drawer class="tour-step1" scrim v-model="isDrawerOpen">
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
            <v-switch :model-value="true" color="primary" label="Show Markers"></v-switch>

          </v-col>
        </v-row>
      </v-card>
    </v-sheet>
  </v-navigation-drawer>

</template>
<script setup lang="ts">
import { ref, onMounted, watch, toRef } from 'vue'

import Notes from './NotesSettings.vue'
import Strings from './StringsSettings.vue'
import { useGuitarStore } from '@/stores/guitarStore'
const guitarStore = useGuitarStore()
const props = defineProps(['drawer']);
const isDrawerOpen = toRef(props, 'drawer');
const selectedStrings = ref<String[]>(guitarStore.selectedStrings)
const selectedNotes = ref<String[]>(guitarStore.selectedNotes)
const frets = ref<string | number | undefined>(guitarStore.frets)
  const showMarkers = ref<boolean>(guitarStore.showMarkers)

onMounted(() => {
  selectedStrings.value = guitarStore.selectedStrings
  selectedNotes.value = guitarStore.selectedNotes
  frets.value = guitarStore.frets
  showMarkers.value = guitarStore.showMarkers
})

// Watchers to update store when values change
watch(selectedStrings, (newValue) => {
  guitarStore.updateSelectedStrings(newValue as string[])
})

watch(selectedNotes, (newValue) => {
  guitarStore.updateSelectedNotes(newValue as string[])
})

watch(frets, (newValue) => {
  guitarStore.updateFrets(newValue as number)
})

watch(showMarkers, (newValue) => {
  guitarStore.updateMarkerVisibility(newValue as boolean)
})
</script>
