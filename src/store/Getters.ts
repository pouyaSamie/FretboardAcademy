import { IState } from "../Interfaces/IState";

export const getters = {
  selectedNotes: (currentState: IState) => currentState.selectedNotes,
  selectedStrings: (currentState: IState) => currentState.selectedStrings,
  frets: (currentState: IState) => currentState.frets,
  IsStarted: (currentState: IState) => currentState.IsStarted,
};
