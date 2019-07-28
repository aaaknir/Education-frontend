import Vue from 'vue'
import App from './App.vue'

import AppMessage from './components/Message.vue';
import AppQuestion from './components/Question.vue';
import AppStartScreen from './components/StartScreen.vue';
import AppResultScreen from './components/ResultScreen.vue';

Vue.component('AppMessage', AppMessage);
Vue.component('AppQuestion', AppQuestion);
Vue.component('AppStartScreen', AppStartScreen);
Vue.component('AppResultScreen', AppResultScreen);

new Vue({
  el: '#app',
  render: h => h(App)
})
