const player = {
  state: {
    player: {
      attack: 1,
      money: 1000,
      exp: 0,
    }
  },

  getters: {

  },

  mutations: {
    add(state,a) {
      debugger;
      state.player.attack += 1;
    }
  },

  actions: {
    addFunction(a, b) {
      debugger;
      a.commit('add', b)
    }
  }

};
export default player;
