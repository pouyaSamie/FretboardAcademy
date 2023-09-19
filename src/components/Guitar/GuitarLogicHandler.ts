import { State } from '@/store/State.Types';
import { GuitarString, StringType } from '../../Interfaces/GuitarNeckTypes';

export const strings = [
  { id: 'high-E', class: 'string-highe', notes: ['e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'b', 'b', 'c', 'c#', 'd'] },
  { id: 'B', class: 'string-b', notes: ['b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'b', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a'] },
  { id: 'G', class: 'string-g', notes: ['g', 'g#', 'a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'b', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f'] },
  { id: 'D', class: 'string-d', notes: ['d', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'b', 'b', 'c'] },
  { id: 'A', class: 'string-a', notes: ['a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g'] },
  { id: 'low-E', class: 'string-lowe', notes: ['e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b', 'c', 'c#', 'd'] },
] as StringType[];

export const selectRandomString = (stringArray:GuitarString[]) => {
  const randomIndex = Math.floor(Math.random() * stringArray.length);
  return stringArray[randomIndex];
};

export const selectRandomNote = (stringNotes:StringType) => {
  const randomIndex = Math.floor(Math.random() * stringNotes.notes.length);
  const fret = strings.filter((string) => string.id === stringNotes.id)[0].notes.indexOf(stringNotes.notes[randomIndex]);
  return { stringNotes: stringNotes.notes[randomIndex].toUpperCase(), string: stringNotes.id, fret };
};

export const GetStringAndNotes = (state: State): GuitarString[] => {
  const userNotes = state.selectedNotes.map((note) => note.toLowerCase()); // Convert all user notes to lowercase
  const userStrings = strings.filter((string) => state.selectedStrings.includes(string.id));
  const noteInFrets = userStrings.map((string) => ({
    ...string,
    notes: string.notes
      .slice(0, state.frets + 1)
      .filter((note) => userNotes.includes(note.toLowerCase())), // Convert the note to lowercase for comparison
  }));
  return noteInFrets;
};

export const checkNote = (
  event: MouseEvent | KeyboardEvent,
  clickedNote: string,
  index: number,
  string: StringType,
) => {
  console.log(clickedNote, index, string.id);
  const target = event.currentTarget as HTMLElement;
  if (target) target.classList.add('on');
  setTimeout(() => {
    target.classList.remove('on');
  }, 2000);
};
