import type {  SelectedNote } from '@/Interfaces/IGuitarNeckTypes';
import type { userPracticeState } from '@/Interfaces/store.Type';
import { defineStore } from 'pinia';

export const usePracticeStore = defineStore('Practice', {
  state: (): userPracticeState => ({
    isStarted: false,
    userSelectedNote: undefined
  }),

  actions: {
    updateStatus(status: boolean) {
      this.isStarted = status;
    },
    
    updateUserChoice(selectedNote: SelectedNote) {
      this.userSelectedNote = selectedNote;
    },
    
    resetTargetNote() {
      this.userSelectedNote = undefined;
    }
    
  }
})
