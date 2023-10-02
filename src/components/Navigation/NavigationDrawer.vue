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
</template>
<script setup lang="ts">
import { toRefs, ref, onMounted, watch } from 'vue';
import { Store, useStore } from 'vuex';
import Notes from './Notes.vue'
import Strings from './Strings.vue'
import { State } from '@/Interfaces/IState';

const store = useStore<State>();

const props = defineProps({
  drawer: Boolean
});

const { drawer } = toRefs(props);
const selectedStrings = ref<String[]>(store.state.selectedStrings);
const selectedNotes = ref<String[]>(store.state.selectedNotes);
const frets = ref<string | number | undefined>(store.state.frets);

onMounted(() => {
  selectedStrings.value = store.state.selectedStrings;
  selectedNotes.value = store.state.selectedNotes;
  frets.value = store.state.frets;
});

// Watchers to update store when values change
watch(selectedStrings, (newValue) => {
  store.commit('updateSelectedStrings', newValue);
});

watch(selectedNotes, (newValue) => {
  store.commit('updateSelectedNotes', newValue);
});

watch(frets, (newValue) => {
  store.commit('updateFrets', newValue);
});

</script>