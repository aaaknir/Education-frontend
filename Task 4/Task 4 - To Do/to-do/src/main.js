import Vue from 'vue'
import App from './App.vue'

import AppStartScreen from './components/StartScreen.vue';

Vue.component('AppStartScreen', AppStartScreen);

new Vue({
  el: '#app',
  render: h => h(App)
});
