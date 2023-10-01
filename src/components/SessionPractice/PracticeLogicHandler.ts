import { IGuitarString, INoteItem } from "@/Interfaces/GuitarNeckTypes";
import { IState } from "@/Interfaces/IState";

export const selectRandomString = (stringArray:IGuitarString[]) => {
  const randomIndex = Math.floor(Math.random() * stringArray.length);
  return stringArray[randomIndex];
};

export const GetUserSelectedStrings = (state: IState): IGuitarString[] => {
  const userNotes = state.selectedNotes.map((note) => note.toLowerCase()); // Convert all user notes to lowercase
  const userStrings = state.Tuning.filter((string) => state.selectedStrings.includes(string.id));
  const noteInFrets = userStrings.map((string) => ({
    ...string,
    notes: string.notes
      .slice(0, state.frets + 1)
      .filter((note) => userNotes.includes(note.toLowerCase())), // Convert the note to lowercase for comparison
  }));
  return noteInFrets;
};

export const ChooseRandomNote = (newState : IState) : INoteItem => {
  const userSelectedStrings = GetUserSelectedStrings(newState);
  console.log(userSelectedStrings)
  const randomString = selectRandomString(userSelectedStrings);
  const randomFretIndex = Math.floor(Math.random() * randomString.notes.length);
  const fret = newState.Tuning.filter((string) => string.id === randomString.id)[0].notes.indexOf(randomString.notes[randomFretIndex]);
  const result : INoteItem = { Name: randomString.notes[randomFretIndex].toUpperCase(), String: randomString.id, Fret: fret };

  return result;
};

export const IsMatch = (fret: number, selectedString: IGuitarString, selectedNote: string, targetNote: INoteItem | null) : boolean => {
  if (targetNote == null) return false;
  if (targetNote.Fret === 0 || targetNote.Fret === 12) {
    // eslint-disable-next-line
    fret = targetNote.Fret;
  }
  return (targetNote.Fret === fret && targetNote.Name.toLowerCase() === selectedNote.toLowerCase() && targetNote.String.toLowerCase() === selectedString.id.toLowerCase());
};