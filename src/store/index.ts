import {createStore} from 'vuex';
import {state} from './State';
import {mutations} from './Mutation';
import {actions} from './Actions';
import {getters} from './Getters';

export default createStore({
	state: () => ({...state}),
	mutations,
	actions,
	getters,
});
