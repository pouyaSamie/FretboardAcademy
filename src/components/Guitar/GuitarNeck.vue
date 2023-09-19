<template>
  <div v-if="false" class="guitar-outer" ref="guitarOuter">
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
        <span v-for="string in strings" :key="string.id" class="string" :class="string.class">

          <!-- NOTES -->
          <span v-for="(note, index) in string.notes" :key="index" :class="['note', 'note-' + note,
            'pos' + index]" @click="checkNote($event, note, index, string)"
            @keydown.enter="checkNote($event, note, index, string)">{{ note }}</span>

          </span>
      </div>
    </div>

    <!-- GUITAR BODY -->
    <div class="guitar-body"></div>
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { useStore } from 'vuex';
import { State } from '@/store/State.Types';
import {
  strings,
  checkNote,
  GetStringAndNotes,
  selectRandomString,
  selectRandomNote,
} from './GuitarLogicHandler';

const store = useStore<State>();
watch(
  () => store.state, // Watch the entire state object
  (newState) => {
    if (!store.getters.IsStarted) return;
    const stringArray = GetStringAndNotes(newState);
    const randomString = selectRandomString(stringArray);
    console.log(selectRandomNote(randomString));
  },
  { deep: true },
);

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.note {
  cursor: pointer;
}
</style>
