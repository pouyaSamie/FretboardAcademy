export type GuitarString = {
	id: string;
	class: string;
	notes: string[];
};

export type NoteItem = {
	name: string;
	string: string;
	fret: number;
};

export type SelectedNote = {
	Note: string;
	String: GuitarString;
	Fret: number;
};
