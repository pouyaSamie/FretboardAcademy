import { defineStore } from 'pinia'
import type { GuitarString, NoteItem } from '@/Interfaces/GuitarNeckTypes'
import type { GuitarState } from '@/Interfaces/store.Type'
import { usePracticeStore } from './userPracticeStore';

// prettier-ignore
export const standardTuning = [
	{id: 'high-E', class: 'string-highe', notes: ['e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'b', 'b', 'c', 'c#', 'd']},
	{id: 'B', class: 'string-b', notes: ['b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'b', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a']},
	{id: 'G', class: 'string-g', notes: ['g', 'g#', 'a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'b', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f']},
	{id: 'D', class: 'string-d', notes: ['d', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'b', 'b', 'c']},
	{id: 'A', class: 'string-a', notes: ['a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g']},
	{id: 'low-E', class: 'string-lowe', notes: ['e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b', 'c', 'c#', 'd']},
] as GuitarString[];


export const useGuitarStore = defineStore('Guitar', {
  state: (): GuitarState => ({
    selectedNotes: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
    selectedStrings: ['high-E', 'B', 'G', 'D', 'A', 'low-E'],
    tuning: standardTuning,
    frets: 12,
		targetNote: undefined,
    showMarkers:false
  }),

  actions: {
    updateSelectedStrings(Strings: string[]) {
      this.selectedStrings = Strings
    },

    updateSelectedNotes(Notes: string[]) {
      this.selectedNotes = Notes
    },

    updateFrets(Frets: number) {
      this.frets = Frets
    },

    updateMarkerVisibility(show: boolean) {
      this.showMarkers = show
    },

		updateTargetNote(selectedNote: NoteItem) {
			const practiceState = usePracticeStore()
      this.targetNote = selectedNote;
      practiceState.resetTargetNote()
    }
  }
});
