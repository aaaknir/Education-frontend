import Vue from 'vue'
import Vuex from 'vuex';
import start from './modules/start.js';
import block from './modules/block.js';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        state_position: 'start'
    },
    getters: {
        checkStatePosition (state) {
            return state.state_position;
        }
    },
    mutations: {
        changeStatePosition (state, new_state_position) {
            state.state_position = new_state_position;
        }
    },
    actions: {
        changeStatePosition (context, new_state_position) {
            context.commit('changeStatePosition', new_state_position)
        }

    },
    modules: {
        start,
        block
    }
})