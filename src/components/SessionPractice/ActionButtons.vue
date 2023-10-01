<template>
  <VLayoutItem model-value position="bottom" class="text-end mb-10" size="88">
    <div class="mr-10">
      <v-row>
        <v-col v-if="isStarted" cols="1" vcols="12">
          <v-avatar color="green" size="56">{{ targetNote?.Name }}</v-avatar>
        </v-col>
        <v-spacer />
        <v-col cols="1">
          <V-Btn :icon="getIcon()" size="large" @click="toggleStart" :color="getColor()" />
        </v-col>


      </v-row>
    </div>
    {{ isMatch }}
  </VLayoutItem>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { ChooseRandomNote, IsMatch } from './PracticeLogicHandler';
import { IState } from '@/Interfaces/IState';
import { INoteItem, ISelectedNote } from '@/Interfaces/GuitarNeckTypes';
import { match } from 'assert';

const store = useStore<IState>();
let targetNote = ref<INoteItem | null>(null);

const toggleStart = () => {
  store.dispatch('updateStatus', !store.state.IsStarted);
};

const isStarted = computed(() => {
  if (store.state.IsStarted)
    SelectRandomNote(store.state);
  return store.state.IsStarted;
});

const UserSelectedNote = computed(() => {
  return store.state.UserSelectedNote
});

const isMatch = computed(() => {
  if (UserSelectedNote && UserSelectedNote.value)
    return IsCorrectNoteSelected(UserSelectedNote.value)
});


function getIcon() {
  return isStarted.value ? "mdi-stop-circle" : "mdi-play-circle"
}

function getColor() {
  return isMatch ? "green" : "red"
}

function SelectRandomNote(state: IState) {
  targetNote.value = ChooseRandomNote(state);


  store.dispatch('updateTargetNote', targetNote.value);
}

function IsCorrectNoteSelected(userSelectedNote: ISelectedNote) {
  let matched = IsMatch(userSelectedNote.Fret, userSelectedNote.String, userSelectedNote.Note, targetNote.value)
  if (matched)
    SelectRandomNote(store.state);
  return matched;
}
</script>