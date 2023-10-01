import {type NoteItem, type SelectedNote} from '@/Interfaces/GuitarNeckTypes';
import {type State} from '../Interfaces/IState';

export const mutations = {
	updateSettings(state: State, newSettings: State) {
		state.frets = newSettings.frets;
		state.selectedNotes = newSettings.selectedNotes;
		state.selectedStrings = newSettings.selectedStrings;
	},
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

};
