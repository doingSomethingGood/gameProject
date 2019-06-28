import mutations_type from "../mutations";

const equipments = {
  state: {
    equipment1: {
      id: 'equipment1',
      name: '武器',
      attack: 10,
      level: 1,
      stage: 1,
      levelUpCost: 1,
      stageUpCost: 1
    },
    equipment2: {
      id: 'equipment2',
      name: '头盔',
      attack: 10,
      level: 1,
      stage: 1,
      levelUpCost: 1,
      stageUpCost: 1
    },
    equipment3: {
      id: 'equipment3',
      name: '护甲',
      attack: 10,
      level: 1,
      stage: 1,
      levelUpCost: 1,
      stageUpCost: 1
    },
    equipment4: {
      id: 'equipment4',
      name: '手套',
      attack: 10,
      level: 1,
      stage: 1,
      levelUpCost: 1,
      stageUpCost: 1
    },
    equipment5: {
      id: 'equipment5',
      name: '护腿',
      attack: 10,
      level: 1,
      stage: 1,
      levelUpCost: 1,
      stageUpCost: 1
    },
    equipment6: {
      id: 'equipment6',
      name: '鞋子',
      attack: 10,
      level: 1,
      stage: 1,
      levelUpCost: 1,
      stageUpCost: 1
    }
  },

  getters: {},

  mutations: {
    /**
     * 等级
     * @param state
     * @param obj
     */
    [mutations_type.EQUIPMENTS_LEVEL_CHANGE](state, obj) {
      let _equipment = state[obj.id];
      _equipment.level += obj.num;
      _equipment.attack = _equipment.attack + _equipment.level * 10;
      _equipment.levelUpCost = _equipment.level * 10;
    },

    /**
     * 等阶
     * @param state
     * @param obj
     */
    [mutations_type.EQUIPMENTS_STAGE_CHANGE](state, obj) {
      let _equipment = state[obj.id];
      _equipment.stage += obj.num;
      _equipment.attack = _equipment.attack + _equipment.stage *  20;
      _equipment.stageUpCost = _equipment.level * 30;
    }
  },

  actions: {

    /**
     * 等级
     * @param commit
     * @param obj
     */
    [mutations_type.EQUIPMENTS_LEVEL_CHANGE]({commit}, obj) {
      commit('equipmentsLevelChange', obj)
    },

    /**
     * 等阶
     * @param commit
     * @param obj
     */
    [mutations_type.EQUIPMENTS_STAGE_CHANGE]({commit}, obj) {
      commit('equipmentsStageChange', obj)
    },
  },
};

export default equipments
