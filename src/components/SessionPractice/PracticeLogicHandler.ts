import { type GuitarString, type NoteItem, type SelectedNote } from '@/Interfaces/GuitarNeckTypes'

import type { GuitarState } from '@/Interfaces/store.Type'

export const selectRandomString = (stringArray: GuitarString[]) => {
  const randomIndex = Math.floor(Math.random() * stringArray.length)
  return stringArray[randomIndex]
}

export const getUserSelectedStrings = (state: GuitarState): GuitarString[] => {
  const userNotes = state.selectedNotes.map((note) => note.toLowerCase()) // Convert all user notes to lowercase
  const userStrings = state.tuning.filter((string) => state.selectedStrings.includes(string.id))
  const noteInFrets = userStrings.map((string) => ({
    ...string,
    notes: string.notes
      .slice(0, state.frets + 1)
      .filter((note) => userNotes.includes(note.toLowerCase())) // Convert the note to lowercase for comparison
  }))
  return noteInFrets
}

export const chooseRandomNote = (
  newState: GuitarState,
  userChoice: SelectedNote | undefined
): NoteItem => {
  const userSelectedStrings = getUserSelectedStrings(newState)
  let result: NoteItem

  do {
    const randomString = selectRandomString(userSelectedStrings)
    const randomFretIndex = Math.floor(Math.random() * randomString.notes.length)

    const fret = newState.tuning
      .filter((string) => string.id === randomString.id)[0]
      .notes.indexOf(randomString.notes[randomFretIndex])
    result = {
      name: randomString.notes[randomFretIndex].toUpperCase(),
      string: randomString.id,
      fret
    }
  } while (userChoice && result.name === userChoice.Note && result.string === userChoice.String.id)

  return result
}

export const isMatch = (
  fret: number,
  selectedString: GuitarString,
  selectedNote: string,
  targetNote: NoteItem | undefined
): boolean => {
  if (targetNote === undefined) {
    return false
  }

  if (targetNote.fret === 0 || targetNote.fret === 12) {
    // eslint-disable-next-line
    fret = targetNote.fret
  }

  return (
    targetNote.fret === fret &&
    targetNote.name.toLowerCase() === selectedNote.toLowerCase() &&
    targetNote.string.toLowerCase() === selectedString.id.toLowerCase()
  )
}
