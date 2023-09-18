<template>
  <div class="guitar-outer" ref="guitarOuter">
    <!-- HEAD -->
    <div class="guitar-head"></div>
    <!-- / HEAD -->

    <!-- NECK -->
    <div class="guitar-neck">
      <!-- FRETBOARD -->
      <div class="fretboard">
        <!-- FRET LINES -->
        <span v-for="fret in 22" :key="fret" :class="'fret fret' + fret"></span>
        <!-- / FRET LINES -->
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
              <!-- /MARKERS -->

        <!-- STRINGS -->
        <span v-for="string in strings" :key="string.id" class="string" :class="string.class">
          <!-- NOTES -->
          <!-- <span v-for="(note, index) in string.notes" :key="index"
          :class="`on note note-${note} pos${index}`">{{ note }}</span> -->
             <!-- NOTES -->
      <span v-for="(note, index) in string.notes" :key="index"
            :class="['note', 'note-' + note,
                   'pos' + index]"
                   @click="checkNote($event,note)"
                   @keydown.enter="checkNote($event,note)" >{{ note }}</span>
      <!-- / NOTES -->
          <!-- / NOTES -->
        </span>
        <!-- / STRINGS -->
      </div>
      <!-- / FRETBOARD -->
    </div>
    <!-- / NECK -->

    <!-- GUITAR BODY -->
    <div class="guitar-body"></div>
    <!-- / GUITAR BODY -->
  </div>

</template>

<script setup lang="ts">
import {
  ref,
  watch,
  onMounted,
} from 'vue';
import { useStore } from 'vuex';

const store = useStore();
// const selectedNotes = computed(() => store.getters.selectedNotes);
// const selectedStrings = computed(() => store.getters.selectedStrings);
// const frets = computed(() => store.getters.frets);

const logNewSettings = (newSettings:object) => {
  console.log('New settings:', newSettings);
};

watch(
  () => store.state.settings,
  (newSettings) => {
    logNewSettings(newSettings);
  },
);

const guitarOuter = ref<HTMLElement | null>(null);
const strings = [
  { id: 'highE', class: 'string-highe', notes: ['e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'b', 'b', 'c', 'c#', 'd'] },
  { id: 'B', class: 'string-b', notes: ['a#', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'b', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a'] },
  { id: 'G', class: 'string-g', notes: ['g', 'g#', 'a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'b', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f'] },
  { id: 'D', class: 'string-d', notes: ['d', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'b', 'b', 'c'] },
  { id: 'A', class: 'string-a', notes: ['a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g'] },
  { id: 'lowE', class: 'string-lowe', notes: ['e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b', 'c', 'c#', 'd'] },
];

let randomlySelectedNote: string | null = null;

const selectRandomNote = () => {
  const notes = ['a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#'];
  const randomIndex = Math.floor(Math.random() * notes.length);
  randomlySelectedNote = notes[randomIndex];
};

// const StartNoteSelect = (notes:string[], selectedStrings:string[], fret:number) => {
//   console.log(notes);
//   console.log(selectedStrings);
//   console.log(fret);
// };

const checkNote = (event: MouseEvent | KeyboardEvent, clickedNote: string) => {
  const target = event.currentTarget as HTMLElement;
  if (target) target.classList.add('on');
  setTimeout(() => {
    target.classList.remove('on');
  }, 2000); // 2000 milliseconds = 2 seconds
  if (clickedNote === randomlySelectedNote) {
    // Select a new random note
    selectRandomNote();
  }
};
onMounted(() => {
  if (guitarOuter.value) {
    const scrollPosition = guitarOuter.value.scrollWidth * 0.5;
    console.log(guitarOuter.value);
    guitarOuter.value.scrollLeft = (scrollPosition * -1);
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .note {
    cursor: pointer;
}
</style>
