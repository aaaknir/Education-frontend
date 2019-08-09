import Vue from 'vue'
import store from './store/index.js'
import App from './App.vue'
import AppStartScreen from './components/StartScreen.vue';
import AppBlockScreen from './components/BlockScreen.vue';

Vue.component('AppBlockScreen', AppBlockScreen);
Vue.component('AppStartScreen', AppStartScreen);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');


