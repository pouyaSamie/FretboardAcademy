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
        <span v-for="string in Tuning" :key="string.id" class="string" :class="[ string.class,{ 'highlighted': isSelected(string,targetNote) }]">

          <!-- NOTES -->
          <span v-for="(note, index) in string.notes" :key="index" :class="['note', 'note-' + note, 'pos' + index, ]"
          @click="OnUserSelectNote($event, index, string, note)"
          @keydown.enter="OnUserSelectNote($event, index, string, note)"> {{ note }} </span>

          </span>
      </div>
    </div>

    <!-- GUITAR BODY -->
    <div class="guitar-body"></div>
  
  </div>

</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { GuitarString, NoteItem, SelectedNote } from '@/Interfaces/IGuitarNeckTypes';
import { State } from '@/Interfaces/IState';
import { computed } from 'vue';

const store = useStore<State>();
const Tuning : GuitarString[] = store.state.tuning;
const targetNote =computed(() => { 
  return store.state.targetNote 
});

const isSelected = (string: GuitarString, TargetNote: NoteItem | undefined) => {
  if (!TargetNote) {
    return false; // No selected note, so nothing is highlighted
  }
  return string.id === TargetNote.string && string.notes[TargetNote.fret] === TargetNote.name.toLowerCase();
};

const OnUserSelectNote =(
  event: MouseEvent | KeyboardEvent,
  fret: number,
  selectedString: GuitarString,
  note: string
) =>{
  const target = event.currentTarget as HTMLElement;
  if (target) target.classList.add('on');
  setTimeout(() => {
    target.classList.remove('on');
  }, 2000);

  store.dispatch('updateUserChoice', {Fret:fret, String : selectedString, Note: note} as SelectedNote);
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
@import '@/assets/scss/bootstrap.scss';
@import '@/assets/scss/responsive.scss';
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
@/Interfaces/IGuitarNeckTypes