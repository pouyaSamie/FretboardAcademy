import { createStore } from 'vuex';
import {State} from './State'
import {mutations} from './Mutation'
import {actions} from './Actions'
import {getters} from './Getters'

export default createStore({
  state: () => ({ ...State }),
  mutations,
  actions,
  getters,
});
