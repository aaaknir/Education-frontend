import Vue from 'vue'
import App from './App.vue'

import AppStartScreen from './components/StartScreen.vue';
import AppGame from './components/Game.vue';

Vue.component('AppGame', AppGame);
Vue.component('AppStartScreen', AppStartScreen);

new Vue({
  el: '#app',
  render: h => h(App)
});
