import {type GuitarString, type NoteItem, type SelectedNote} from './IGuitarNeckTypes';

export type GuitarState = {
	selectedNotes: string[];
	selectedStrings: string[];
	frets: number;
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