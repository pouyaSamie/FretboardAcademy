<template>
  <div class="container">
    <button @click="StartNoteSelect"
     class="flex-2">Start</button>

     <!-- Notes Section -->
    <div class="flex-tiny"><b>Notes</b></div>
    <ul class="info-box">
      <li v-for="note in notes" :key="note"
       class="info-item" :class="{ selected: isNoteSelected(note) }"
        @click="toggleNoteSelection(note)"
        @keydown.enter="toggleNoteSelection(note)">{{ note }}</li>
    </ul>

     <!-- Strings Section -->
    <div class="flex-tiny"><b>Strings</b></div>
    <ul class="info-box">
      <li v-for="string in strings" :key="string"
        class="info-item" :class="{ selected: isStringSelected(string) }"
        @click="toggleStringSelection(string)"
        @keydown.enter="toggleStringSelection(string)">{{ string }}</li>
    </ul>

     <!-- Fret Section -->
    <div class="flex-tiny"><span>Fret</span></div>
    <label htmlFor="formControlRange" for="formControlRange">
      <input type="range" id="formControlRange" v-model="frets">
    </label>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

// Initialize Values
const selectedNotes = ref<string[]>(['A', 'B', 'C', 'D', 'E', 'F', 'G']);
const selectedstrings = ref<string[]>(['high-E', 'B', 'G', 'D', 'A', 'low-E']);
const frets = ref<number>(24);

const notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
const strings = ['high-E', 'B', 'G', 'D', 'A', 'low-E'];

// Note selection
const isNoteSelected = (note: string) => selectedNotes.value.includes(note);
const toggleNoteSelection = (note: string) => {
  const index = selectedNotes.value.indexOf(note);
  if (index === -1) selectedstrings.value.push(note);
  else selectedstrings.value.splice(index, 1);
};

// String selection
const isStringSelected = (string: string) => selectedstrings.value.includes(string);
const toggleStringSelection = (note: string) => {
  const index = selectedstrings.value.indexOf(note);
  if (index === -1) selectedstrings.value.push(note);
  else selectedstrings.value.splice(index, 1);
};

// store
const Settings = {
  selectedNotes,
  selectedstrings,
  frets,
};

const StartNoteSelect = () => {
  store.dispatch('UpdateSettings', Settings);
};

</script>
<style lang="less">
div .container {
  display: flex;
  position: fixed;
  justify-content: space-between;
  width: 93%;
  bottom: 15px;
  background-color: rgba(110, 100, 93, 0.2);
  color: white;
  height: 50px;
  margin: 0px 4%;
  line-height: 50px;
}

.info-item.selected {
  background-color: rgba(14, 13, 12, 0.4);
  color: white;
  padding: 13px;
  line-height: 0px;
  -webkit-box-shadow: inset 2px 3px 5px 1px rgba(0, 0, 0, 0.39);
  box-shadow: inset 2px 3px 5px 1px rgba(0, 0, 0, 0.39);
}

.flex-1 {
  flex: 1;
}

.flex-tiny {
  display: flex;
  flex: 0.1;
  background-color: #0000004f;
  padding: 2px 8px;
  line-height: 47px;
  justify-content: center;
  border: 1px solid #373131b8;
}

.flex-2 {
  flex: 0.3;
  margin: 9px 30px;
}

.info-box {
  flex: 1;
  display: flex;
  justify-content: space-around;
  margin: 14px 10px;
  cursor: pointer;
  /* Add cursor pointer for selected notes */
}

.info-item {
  padding: 12px;
  line-height: 0px;
}

ul,
li {
  list-style: none
}
</style>
