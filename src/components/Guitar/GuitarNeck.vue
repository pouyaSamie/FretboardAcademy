<template>
  <div class="guitar-outer" ref="guitarOuter">
    <!-- HEAD -->
    <div class="guitar-head"></div>

    <!-- NECK -->
    <div class="guitar-neck">
      <!-- FRETBOARD -->
      <div class="fretboard">

        <!-- FRET LINES -->
        <span v-for="fret in 22" :key="fret" :class="'fret fret' + fret"></span>

        <!-- /MARKERS  -->
        <span class="marker1 marker"><i></i></span>
        <span class="marker2 marker"><i></i></span>
        <span class="marker3 marker"><i></i></span>
        <span class="marker4 marker"><i></i></span>
        <span class="marker5 marker"><i></i></span>
        <span class="marker5b marker"><i></i></span>
        <span class="marker6 marker"><i></i></span>
        <span class="marker7 marker"><i></i></span>
        <span class="marker8 marker"><i></i></span>
        <span class="marker9 marker"><i></i></span>

        <!-- STRINGS -->
        <span v-for="string in strings" :key="string.id" class="string" :class="[ string.class,{ 'highlighted': isSelected(string,selectedNote) }]">

          <!-- NOTES -->
          <span v-for="(note, index) in string.notes" :key="index" :class="['on','note', 'note-' + note, 'pos' + index, ]"
          @click="checkUserNote($event, index, string, note, selectedNote)"
          @keydown.enter="checkUserNote($event, index, string, note, selectedNote)"> {{ note }} </span>

          </span>
      </div>
    </div>

    <!-- GUITAR BODY -->
    <div class="guitar-body"></div>
  </div>
  <div v-if="selectedNote != null" ref="NoteToFind" class="note-to-find" :class="[matched != null && matched ? 'correct' : 'wrong' ]">
    {{selectedNote.Name}}
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useStore } from 'vuex';
import { State } from '@/store/State.Types';
import { GuitarString, NoteItem } from '@/Interfaces/GuitarNeckTypes';
import {
  strings,
  IsMatch,
  ChooseRandomNote,
} from './GuitarLogicHandler';

const store = useStore<State>();
// eslint-disable-next-line
let selectedNote = ref<NoteItem | null>(null);
const matched = ref<boolean | null>(null);
let state : State;
watch(
  () => store.state, // Watch the entire state object
  (newState) => {
    if (!store.getters.IsStarted) {
      selectedNote.value = null;
      return;
    }
    selectedNote.value = ChooseRandomNote(newState);
    state = newState;
    console.log(selectedNote.value);
  },
  { deep: true },
);
const isSelected = (string: GuitarString, selectedString: NoteItem | null) => {
  if (!selectedString) {
    return false; // No selected note, so nothing is highlighted
  }
  return string.id === selectedString.String && string.notes[selectedString.Fret] === selectedString.Name.toLowerCase();
};

const checkUserNote = (
  event: MouseEvent | KeyboardEvent,
  fret: number,
  selectedString: GuitarString,
  clickedNote: string,
  targetNote: NoteItem | null,
) => {
  const target = event.currentTarget as HTMLElement;
  target.classList.remove('correct');
  target.classList.remove('wrong');
  if (target) target.classList.add('on');
  setTimeout(() => {
    target.classList.remove('on');
  }, 2000);

  matched.value = IsMatch(fret, selectedString, clickedNote, targetNote);
  if (matched.value) {
    target.classList.add('correct');
    selectedNote.value = ChooseRandomNote(state);
  } else target.classList.add('wrong');
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
@import '@/assets/css/guitar.css';
@import '@/assets/css/guitar.responsive.css';
.note {
  cursor: pointer;
}

.highlighted{
  border: 2px solid blue;
}
.note-to-find{
  position: fixed;
    bottom: 10%;
    left: 92%;
    width: 2em;
    height: 2em;
    margin-top: -1em;
    margin-left: -15em;
    border: 1px solid red;
    background-color: #202a268f;
    text-align: center;
    line-height: 70px;
    font-weight: 900;
    font-size: 40px;
}

.on.wrong{
  background-color: red;
}
.on.correct{
  background-color: green;
}

@media (max-width: 979px) and (orientation: portrait){
  .note-to-find{
    left: unset;
    right: 77%;
  }
}
</style>
