<template>
  <VLayoutItem model-value position="bottom" class="text-end mb-10" size="88">
    <div class="mr-10">
      <v-row>
        <v-col v-if="isStarted" lg="1" md="1" sm="2"  >
          <v-avatar :icon="getAvatarIcon()" :color="avatarColor" size="56">{{
            targetNote?.name
          }}</v-avatar>
        </v-col>
        <v-spacer />
        <v-col lg="1" md="2" sm="2">
          <V-Btn
            :icon="getButtonIcon()"
            size="large"
            @click="toggleStart"
            :color="getButtonColor()"
          />
        </v-col>
      </v-row>
    </div>
  </VLayoutItem>
</template>
<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
import {
  chooseRandomNote,
  isMatch,
} from "./PracticeLogicHandler";
import { State } from "@/Interfaces/IState";
import { NoteItem } from "@/Interfaces/IGuitarNeckTypes";

const store = useStore<State>();
let targetNote = ref<NoteItem | undefined>(undefined);
let showCross = ref(false);
let showCheck = ref(false);
let avatarColor = ref("#ccc");
const toggleStart = () => {
  let shouldStart = !store.state.isStarted;
  store.dispatch("updateStatus", shouldStart);
  if (shouldStart) SelectRandomNote(store.state);
};

const isStarted = computed(() => {
  return store.state.isStarted;
});

watch(
  () => store.state.userSelectedNote,
  (newUserSelectedNote) => {
  if (newUserSelectedNote) {
    let matched = isMatch(
      newUserSelectedNote.Fret,
      newUserSelectedNote.String,
      newUserSelectedNote.Note,
      targetNote.value
    );
    if (matched) {
      showCheck.value = true;
      avatarColor.value ="green";
      SelectRandomNote(store.state);
    } else {
      avatarColor.value ="red";
      showCross.value = true;
    }
    store.dispatch("updateUserScore", matched);
    return matched;
  }

  return null;
});


function getAvatarIcon() {
  if (showCross.value) {
    setTimeout(() => {
      showCross.value = false;
      avatarColor.value ="#ccc";
    }, 2000);
    return "mdi-close";
  } else if (showCheck.value) {
    setTimeout(() => {
      showCheck.value = false;
      avatarColor.value ="#ccc";
    }, 2000);
    return "mdi-check";
  } else {
    return ""; // Change this to the default icon
  }
}

function getButtonIcon() {
  return isStarted.value ? "mdi-stop-circle" : "mdi-play-circle";
}

function getButtonColor() {
  return isStarted.value ? "red" : "green";
}

function SelectRandomNote(state: State) {
  targetNote.value = chooseRandomNote(state);
  store.dispatch("updateTargetNote", targetNote.value);
}
</script>
