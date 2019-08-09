import Vue from 'vue'
import Vuex from 'vuex';
import start from './modules/start.js';
import block from './modules/block.js';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        start,
        block
    }
})