import { ActionContext } from "vuex";
import { IState } from "../Interfaces/IState";
import { ISelectedNote,INoteItem } from "@/Interfaces/GuitarNeckTypes";
import { compileString } from "sass";

export const actions = {
  updateSettings(context: ActionContext<IState, IState>, newSettings: IState) {
    context.commit('UPDATE_SETTINGS', newSettings);
  },
  updateStatus(context: ActionContext<IState, IState>, status: boolean) {
    context.commit('UPDATE_STATUS', status);
  },

  updateUserChoice(context: ActionContext<IState, IState>, selectedNote: ISelectedNote){
    context.commit('UPDATE_USER_SELECTED_NOTE', selectedNote);
  },

  updateTargetNote(context: ActionContext<IState, IState>, targetNote: INoteItem){
    context.commit('UPDATE_TARGET_NOTE', targetNote);
  }

};
