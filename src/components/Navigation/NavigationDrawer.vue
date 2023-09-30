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
{{ selectedNotes }}
{{ selectedStrings }}
{{ frets }}
  </v-navigation-drawer>
</template>
<script setup lang="ts">
import { toRefs, ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import Notes from './Notes.vue'
import Strings from './Strings.vue'

const store = useStore();

const props = defineProps({
  drawer: Boolean
});

const { drawer } = toRefs(props);
const selectedStrings = ref(store.state.selectedStrings);
const selectedNotes = ref(store.state.selectedNotes);
const frets = ref(store.state.frets);

onMounted(() => {
  // Set initial values from store
  drawer.value = store.state.drawer;
  selectedStrings.value = store.state.selectedStrings;
  selectedNotes.value = store.state.selectedNotes;
  frets.value = store.state.frets;
});

</script>