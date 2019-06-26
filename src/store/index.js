import Vue from 'vue'
import Vuex from 'vuex'
import player from './modules/player'
import getters from './getters'

Vue.use(Vuex);


const store = new Vuex.Store({
  modules: {
    player
  },
  getters
});

export default store

