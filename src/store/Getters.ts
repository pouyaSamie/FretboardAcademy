import {type State} from '../Interfaces/IState';

export const getters = {
	selectedNotes: (currentState: State) => currentState.selectedNotes,
	selectedStrings: (currentState: State) => currentState.selectedStrings,
	frets: (currentState: State) => currentState.frets,
	isStarted: (currentState: State) => currentState.isStarted,
};
