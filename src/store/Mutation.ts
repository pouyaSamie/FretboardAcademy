import { INoteItem, ISelectedNote } from "@/Interfaces/GuitarNeckTypes";
import { IState } from "../Interfaces/IState";

export const mutations = {
  UPDATE_SETTINGS: (state: IState, newSettings: IState) => {
    state.frets = newSettings.frets;
    state.selectedNotes = newSettings.selectedNotes;
    state.selectedStrings = newSettings.selectedStrings;
  },
  UPDATE_STATUS: (state: IState, status: boolean) => {
    state.IsStarted = !state.IsStarted;
  },
  
  UPDATE_USER_SELECTED_NOTE: (state: IState,selectedNote: ISelectedNote) => {
    state.UserSelectedNote =  selectedNote;
  },

  UPDATE_TARGET_NOTE:(state: IState,selectedNote: INoteItem) => {
    state.TargetNote =  selectedNote;
    state.UserSelectedNote= null;
  },

};