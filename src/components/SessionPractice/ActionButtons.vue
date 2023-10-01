<template>
  <VLayoutItem model-value position="bottom" class="text-end mb-10" size="88">
    <div class="mr-10">
      <v-row>
        <v-col v-if="isStarted" cols="1" vcols="12">
          <v-avatar :color="getNoteColor" size="56">{{ targetNote?.Name }}</v-avatar>
        </v-col>
        <v-spacer />
        <v-col cols="1">
          <V-Btn :icon="getButtonIcon()" size="large" @click="toggleStart" :color="getButtonColor()" />
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
  return null;
});


function getButtonIcon() {
  return isStarted.value ? "mdi-stop-circle" : "mdi-play-circle"
}

function getButtonColor() {
  return isStarted.value ?  "red" : "green"
}

const getNoteColor = computed(() => {
  if(isMatch.value == null)
    return "#ccc";
  console.log(isMatch.value)
  return isMatch.value ? "green" : "red"
})

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