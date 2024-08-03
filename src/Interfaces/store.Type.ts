import {type GuitarString, type NoteItem, type SelectedNote} from './GuitarNeckTypes';

export type GuitarState = {
	selectedNotes: string[];
	selectedStrings: string[];
	frets: number;
	showMarkers: boolean;
	tuning: GuitarString[];
	targetNote: NoteItem | undefined;
};

export type userPracticeState = {
	isStarted: boolean;
	userSelectedNote: SelectedNote | undefined;

};

export type userScoreState = {
	UserScore:number;
	TotalChoice:number;
};