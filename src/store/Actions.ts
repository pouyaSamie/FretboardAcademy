import {type ActionContext} from 'vuex';
import {type State} from '../Interfaces/IState';
import {type SelectedNote, type NoteItem} from '@/Interfaces/GuitarNeckTypes';
import {compileString} from 'sass';

export const actions = {
	updateSettings(context: ActionContext<State, State>, newSettings: State) {
		context.commit('updateSettings', newSettings);
	},
	updateStatus(context: ActionContext<State, State>, status: boolean) {
		context.commit('updateStatus', status);
	},

	updateUserChoice(context: ActionContext<State, State>, selectedNote: SelectedNote) {
		context.commit('updateUserChoice', selectedNote);
	},

	updateTargetNote(context: ActionContext<State, State>, targetNote: NoteItem) {
		context.commit('updateTargetNote', targetNote);
	},

};
