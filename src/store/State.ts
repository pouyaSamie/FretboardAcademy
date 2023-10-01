import { IGuitarString } from "@/Interfaces/GuitarNeckTypes";
import { IState } from "../Interfaces/IState";

export const StandardTuning = [
    { id: 'high-E', class: 'string-highe', notes: ['e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'b', 'b', 'c', 'c#', 'd'] },
    { id: 'B', class: 'string-b', notes: ['b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'b', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a'] },
    { id: 'G', class: 'string-g', notes: ['g', 'g#', 'a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'b', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f'] },
    { id: 'D', class: 'string-d', notes: ['d', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'b', 'b', 'c'] },
    { id: 'A', class: 'string-a', notes: ['a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g'] },
    { id: 'low-E', class: 'string-lowe', notes: ['e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b', 'c', 'c#', 'd'] },
  ] as IGuitarString[];

export const State : IState =  {
    selectedNotes: ["A", "B", "C", "D", "E", "F", "G"],
    selectedStrings: ["high-E", "B", "G", "D", "A", "low-E"],
    Tuning : StandardTuning,
    frets: 12,
    IsStarted: false,
    drawer: false,
    UserSelectedNote: null,
    TargetNote: null
};
