// store.ts

import { createStore, ActionContext } from 'vuex';

export interface State {
  selectedNotes: string[],
  selectedStrings: string[],
  frets: number,
}

const data = {
  selectedNotes: [] as string[],
  selectedStrings: [] as string[],
  frets: 0,

} as State;

// Define your mutations
const mutations = {
  UPDATE_SETTINGS: (state: State, newSettings: State) => {
    state.frets = newSettings.frets;
    state.selectedNotes = newSettings.selectedNotes;
    state.selectedStrings = newSettings.selectedStrings;
  },
};
// Define your actions
const actions = {
  updateSettings(context: ActionContext<State, State>, newSettings: State) {
    context.commit('UPDATE_SETTINGS', newSettings);
  },
};

// Define your getters
const getters = {
  selectedNotes: (currentState: State) => currentState.selectedNotes,
  selectedStrings: (currentState: State) => currentState.selectedStrings,
  frets: (currentState: State) => currentState.frets,
};

// Create and export the Vuex store instance
export default createStore({
  state: () => ({ ...data }), // Ensure that you return a copy of the data to avoid direct mutation
  mutations,
  actions,
  getters,
});
