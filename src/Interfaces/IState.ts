import { IGuitarString, INoteItem, ISelectedNote } from "./GuitarNeckTypes";

export interface IState {
  selectedNotes: string[];
  selectedStrings: string[];
  frets: number;
  IsStarted : boolean
  drawer : boolean,
  Tuning : IGuitarString[],
  UserSelectedNote : ISelectedNote | null,
  TargetNote : INoteItem | null
}
