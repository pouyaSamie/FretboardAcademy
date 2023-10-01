import {type GuitarString, type NoteItem, type SelectedNote} from './GuitarNeckTypes';

export type State = {
	selectedNotes: string[];
	selectedStrings: string[];
	frets: number;
	isStarted: boolean;
	drawer: boolean;
	tuning: GuitarString[];
	userSelectedNote: SelectedNote | undefined;
	targetNote: NoteItem | undefined;
};