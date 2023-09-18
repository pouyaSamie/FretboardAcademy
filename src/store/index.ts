// src/store/index.ts

import { createStore } from 'vuex';

export default createStore({
  state: {
    settings: {
      selectedNotes: [],
      selectedStrings: [],
      frets: 0,
    },
  },
  mutations: {
    updateSettings(state, newSettings) {
      state.settings = newSettings;
    },
  },
  actions: {
    updateSettings({ commit }, newSettings) {
      commit('updateSettings', newSettings);
    },
  },
  getters: {
    // Getters to retrieve computed state properties
    selectedNotes(state) {
      return state.settings.selectedNotes;
    },
    selectedStrings(state) {
      return state.settings.selectedStrings;
    },
    frets(state) {
      return state.settings.frets;
    },
  },
});
