import mutations_type from "../mutations";
const skills = {
  state: {
    skill1: {
      id: 'skill1',
      name: '名称',
      attack: 0,
      level: 0,
      levelUpCost: 1
    },
    skill2: {
      id: 'skill2',
      name: '名称',
      attack: 0,
      level: 0,
      levelUpCost: 1
    },
    skill3: {
      id: 'skill3',
      name: '名称',
      attack: 0,
      level: 0,
      levelUpCost: 1
    },
    skill4: {
      id: 'skill4',
      name: '名称',
      attack: 0,
      level: 0,
      levelUpCost: 1
    },
    skill5: {
      id: 'skill5',
      name: '名称',
      attack: 0,
      level: 0,
      levelUpCost: 1
    },
    skill6: {
      id: 'skill6',
      name: '名称',
      attack: 0,
      level: 0,
      levelUpCost: 1
    }
  },
  getters: {},
  mutations: {
    /**
     * 技能等级
     * @param state
     * @param obj
     */
    [mutations_type.SKILLS_LEVEL_CHANGE](state, obj) {
      let _skill = state[obj.id];
      _skill.level += obj.num;
      _skill.attack = _skill.attack + _skill.level *  20;
      _skill.levelUpCost = _skill.level * 30;
    }
  },
  actions: {
    /**
     * 技能等级
     * @param commit
     * @param obj
     */
    [mutations_type.SKILLS_LEVEL_CHANGE]({commit}, obj) {
      commit('skillsLevelChange', obj)
    },
  }
};
export default skills
