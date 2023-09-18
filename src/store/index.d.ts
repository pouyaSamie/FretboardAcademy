// store.d.ts

// Import the types from Vuex
import { Store as VuexStore, Commit} from 'vuex';

// Define your own types for the store state
export interface State {
  selectedNotes: string[],
  selectedStrings: string[],
  frets: number,
}


// Define your mutations
type Mutations = {
  UPDATE_SETTINGS(state: State, newSettings: State): void;
};

// Define your actions
type Actions = {
  updateSettings(context: Commit, newSettings: State): void;
};

// Define your getters
type Getters = {
  selectedNotes(state: State): string[];
  selectedStrings(state: State): string[];
  frets(state: State): number;
};

// Extend the store type to include your custom state, mutations, actions, and getters
declare const store: VuexStore<State>;

export function useStore(): typeof store;

export default store;
