import {type ActionContext} from 'vuex';
import {type State} from '../Interfaces/IState';
import {type SelectedNote, type NoteItem} from '@/Interfaces/IGuitarNeckTypes';


export const actions = {
	updateStatus(context: ActionContext<State, State>, status: boolean) {
		context.commit('updateStatus', status);
	},

	updateUserChoice(context: ActionContext<State, State>, selectedNote: SelectedNote) {
		context.commit('updateUserChoice', selectedNote);
	},

	updateTargetNote(context: ActionContext<State, State>, targetNote: NoteItem) {
		context.commit('updateTargetNote', targetNote);
	},

  updateSelectedStrings(context: ActionContext<State, State>, Strings:string[]) {
    context.commit('updateSelectedStrings', Strings);
  },

  updateSelectedNotes(context: ActionContext<State, State>, Notes:string[]) {
    context.commit('updateSelectedNotes', Notes);
  },

  updateFrets(context: ActionContext<State, State>, Frets:number) {
		context.commit('updateFrets', Frets);
  },

	updateUserScore(context: ActionContext<State, State>, isMatch:boolean) {
		context.commit('updateUserScore', isMatch);
  },
};
