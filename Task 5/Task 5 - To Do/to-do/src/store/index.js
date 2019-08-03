import Vue from 'vue'
import 'es6-promise/auto';
import Vuex from 'vuex';
import todo from './modules/todo';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todo
  }
})
