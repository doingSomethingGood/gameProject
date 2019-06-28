import mutations_type from '../mutations'
const player = {
  // namespaced: true,
  state: {
    attack: 1,
    money: 1000,
    exp: 0,
  },

  getters: {

  },

  mutations: {
    /**
     * 金币改变的方法
     * @param state
     * @param newValue
     */
    [mutations_type.MONEY_CHANGE](state, newValue) {
      state.money += newValue;
    },
    /**
     * 经验值改变的方法
     * @param state
     * @param newValue
     */
    [mutations_type.EXP_CHANGE](state, newValue) {
      state.money += newValue;
    }
  },

  actions: {
    /**
     * 金币改变方法调用
     * @param commit
     * @param newValue
     */
    [mutations_type.MONEY_CHANGE]({commit}, newValue) {
      commit('moneyChange', newValue)
    },
    /**
     * 经验值改变方法调用
     * @param commit
     * @param newValue
     */
    [mutations_type.EXP_CHANGE]({commit}, newValue) {
      commit('expChange', newValue)
    },
  }

};
export default player;
