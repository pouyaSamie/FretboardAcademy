// store.d.ts

// Import the types from Vuex
import { Store as VuexStore, CommitOptions, DispatchOptions } from 'vuex';

// Define your own types for the store state
interface State {
  selectedNotes: string[];
  selectedStrings: string[];
  frets: number;
}

// Define your mutations
type Mutations = {
  updateSelectedNotes(state: State, selectedNotes: string[]): void;
  updateSelectedStrings(state: State, selectedStrings: string[]): void;
  updateFrets(state: State, frets: number): void;
};

// Define your actions
type Actions = {
  UpdateSettings(
    context: CommitOptions,
    payload: {
      selectedNotes: string[];
      selectedStrings: string[];
      frets: number;
    }
  ): void;
};

// Define your getters
type Getters = {
  getSelectedNotes(state: State): string[];
  getSelectedStrings(state: State): string[];
  getFrets(state: State): number;
};

// Extend the store type to include your custom state, mutations, actions, and getters
declare const store: VuexStore<State>;

export function useStore(): typeof store;

export default store;
