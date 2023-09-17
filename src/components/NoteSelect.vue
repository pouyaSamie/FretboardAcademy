<template>
  <div class="container">
    <button class="flex-2">Start</button>
    <div class="flex-tiny"><b>Notes</b></div>
    <ul class="note-box">
      <li
        v-for="note in notes"
        :key="note"
        class="note"
        :class="{ selected: selectedNote === note }"
        @click="selectNote(note)"
        @keydown.enter="selectNote(note)"
      >{{ note }}</li>
    </ul>
    <div class="flex-1"><b>Strings</b></div>
    <div class="flex-1">Fret</div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const selectedNote = ref<string>('A');

const notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
const selectNote = (note:string) => {
  selectedNote.value = note;
  console.log(note);
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
.note.selected {
  background-color: rgba(14, 13, 12, 0.4);
    color: white;
    padding: 13px;
    line-height: 0px;
}
.flex-1 {
  flex: 1;
}
.flex-tiny{
  flex: 0.1;
}

.flex-2 {
  flex: 0.3;
  margin: 9px 30px;
}

.note-box {
  flex: 1;
  display: flex;
  justify-content: space-around;
  margin: 14px 10px;
}

.note {
  padding: 12px;
  line-height: 0px;
}
ul,
li{
  list-style: none
}
</style>
