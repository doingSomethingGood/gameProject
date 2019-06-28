import Vue from 'vue'
import Vuex from 'vuex'
import player from './modules/player'
import skills from './modules/skills'
import equipments from './modules/equipments'
import getters from './getters'

Vue.use(Vuex);


const store = new Vuex.Store({
  modules: {
    player,
    skills,
    equipments
  },
  getters
});

export default store

