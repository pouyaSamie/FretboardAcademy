<template>
    <div class="actions">
        <V-Btn class="tour-step2 controller-button" :icon="getButtonIcon()" :class="isStarted ? 'red' : 'green'"
            @click="toggleStart" size="small" />
        <!-- <v-icon size="large" class="start-icon">mdi-play</v-icon> -->
        <div v-if="isStarted" class="note-to-play">{{ targetNote?.name }}</div>
        <v-icon size="large" v-if="showResult" :class="correctSelection ? 'green' : 'red'" class="result-icon">{{ resultIcon }}</v-icon>

    </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { chooseRandomNote, isMatch } from './PracticeLogicHandler'
import type { NoteItem, SelectedNote } from '@/Interfaces/GuitarNeckTypes'
import { usePracticeStore } from '@/stores/userPracticeStore'
import { useScoreStore } from '@/stores/userScoreStore'
import type { GuitarState } from '@/Interfaces/store.Type'
import { useGuitarStore } from '@/stores/guitarStore'

const store = usePracticeStore()
const userScoreStore = useScoreStore()
const guitarStore = useGuitarStore()
let targetNote = ref<NoteItem | undefined>(undefined)
let correctSelection = ref(false)
let resultIcon = ref("mdi-check")

let showResult = ref(false)
const toggleStart = () => {
    let shouldStart = !store.isStarted
    store.updateStatus(shouldStart)
    if (shouldStart) SelectRandomNote(guitarStore)
}

const isStarted = computed(() => {
    return store.isStarted
})


watch(
    () => store.userSelectedNote, (userChoice) => {
        console.log(userChoice)
        if (userChoice) {
            let matched = isMatch(
                userChoice.Fret,
                userChoice.String,
                userChoice.Note,
                targetNote.value
            )
            if (matched) {
                SelectRandomNote(guitarStore,userChoice)
                correctSelection.value = true
            } else {
                correctSelection.value = false
            }
            userScoreStore.updateUserScore(matched)
            UpdateResultIcon();
            return matched
        }
        return null
    }

)

function UpdateResultIcon() {
    console.log("UpdateResultIcon")
    showResult.value = true;
    if (correctSelection.value) {
        resultIcon.value = 'mdi-check'
        setTimeout(() => {
            console.log("true")
            showResult.value = false;
        }, 1000)

    } else {
        resultIcon.value = 'mdi-close'
        setTimeout(() => {
            console.log("false")
            showResult.value = false;
        }, 1000)

    }

}

function getButtonIcon() {
    return isStarted.value ? 'mdi-stop' : 'mdi-play'
}

function SelectRandomNote(state: GuitarState,userChoice:SelectedNote | undefined =undefined) {
    targetNote.value = chooseRandomNote(state,userChoice)
    guitarStore.updateTargetNote(targetNote.value)
}
</script>


<style scoped>
.actions {
    display: flex;
    flex: 1;
}

.controller-button {
    color: white;
    /* border: 1px solid green; */
    /* padding: 5px; */
    border-radius: 4px;

}

.red {
    background-color: red;
}

.green {
    background-color: green;
}

.note-to-play {
    align-items: center;
    display: flex;
    font-feature-settings: "liga";
    margin: 0px 0px;
    padding: 0px 15px;
    font-size: larger;
    font-weight: bold;
    background-color: black;
    color: white;
}

.result-icon{
    color: white;
    border: 1px solid green; 
    padding: 5px; 
    border-radius: 4px;
    width: 1.4em;
    min-width: 1.4em;
    height: 1.4em;
    
}
</style>