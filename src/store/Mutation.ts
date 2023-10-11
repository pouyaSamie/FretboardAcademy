import {type NoteItem, type SelectedNote} from '@/Interfaces/IGuitarNeckTypes';
import {type State} from '../Interfaces/IState';

export const mutations = {

	updateStatus(state: State, status: boolean) {
		state.isStarted = !state.isStarted;
	},

	updateUserChoice(state: State, selectedNote: SelectedNote) {
		state.userSelectedNote = selectedNote;
	},

	updateTargetNote(state: State, selectedNote: NoteItem) {
		state.targetNote = selectedNote;
		state.userSelectedNote = undefined;
	},

  updateSelectedStrings(state: State, Strings:string[]) {
    state.selectedStrings = Strings;
  },

  updateSelectedNotes(state: State, Notes:string[]) {
    state.selectedNotes = Notes;
  },

  updateFrets(state: State, Frets:number) {
		state.frets = Frets;
  },
	updateUserScore(state: State, isMatch:boolean) {
		state.TotalChoice =+1;
		if (isMatch)
			state.UserScore =+1;
  },
};
