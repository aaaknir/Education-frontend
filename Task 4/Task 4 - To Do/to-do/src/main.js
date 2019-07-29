import Vue from 'vue'
import App from './App.vue'

import AppStartScreen from './components/StartScreen.vue';
import AppList from './components/List.vue';

Vue.component('AppList', AppList);
Vue.component('AppStartScreen', AppStartScreen);

new Vue({
  el: '#app',
  render: h => h(App)
});
