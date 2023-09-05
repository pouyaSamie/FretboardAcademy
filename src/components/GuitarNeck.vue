<template>
  <button @click="toggleGame">{{ gameActive ? 'Stop' : 'Start' }} Game</button>
  <div class="guitar-outer">
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
                   @click="checkNote(note)"
                   @keydown.enter="checkNote(note)" >{{ note }}</span>
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

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'guitarNeck',
  props: {
    msg: String,
  },
  data() {
    return {
      strings: [
        { id: 'highE', class: 'string-highe', notes: ['e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'b', 'b', 'c', 'c#', 'd'] },
        { id: 'B', class: 'string-b', notes: ['a#', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'b', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a'] },
        { id: 'G', class: 'string-g', notes: ['g', 'g#', 'a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'b', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f'] },
        { id: 'D', class: 'string-d', notes: ['d', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'b', 'b', 'c'] },
        { id: 'A', class: 'string-a', notes: ['a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g'] },
        { id: 'lowE', class: 'string-lowe', notes: ['e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b', 'c', 'c#', 'd'] },
      ],
      randomlySelectedNote: null as string | null,
      gameActive: false,
      score: 0,
    };
  },
  methods: {
    selectRandomNote() {
      const notes = ['a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#'];
      const randomIndex = Math.floor(Math.random() * notes.length);
      const selectedNote = notes[randomIndex];
      this.randomlySelectedNote = selectedNote;
    },
    checkNote(clickedNote: string) {
      console.log(clickedNote);
      if (clickedNote === this.randomlySelectedNote) {
        // Correct note clicked, add 10 points
        this.score += 10;
      } else {
        // Incorrect note clicked, subtract 5 points
        this.score -= 5;
      }
      // Select a new random note
      this.selectRandomNote();
    },
    toggleGame() {
      // Toggle the game state (start/stop)
      this.gameActive = !this.gameActive;

      // Reset the score and start a new game
      if (this.gameActive) {
        this.score = 0;
        this.selectRandomNote();
      }
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .note {
    cursor: pointer;
}
</style>
