<template>
  <div class="container">
    <button class="flex-2">Start</button>
    <div class="flex-1">Notes</div>
    <ul class="note-box">
      <li class="note">A</li>
      <li class="note">A#</li>
      <li class="note">B</li>
      <li class="note">C</li>
      <li class="note">C#</li>
      <li class="note">D</li>
      <li class="note">D#</li>
      <li class="note">E</li>
      <li class="note">F</li>
      <li class="note">F#</li>
      <li class="note">G</li>
      <li class="note">G#</li>
    </ul>
    <div class="flex-1">Strings</div>
    <div class="flex-1">Fret</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NoteSelect',
});
</script>
<style lang="less">
div .container{
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
.flex-1 {
  flex: 1;
}
.flex-2 {
    flex: 0.3;
    margin: 9px 30px;
}
.note-box{
  border: 1px solid red;
}
.note{
  border: 1px solid blue;
}
</style>
