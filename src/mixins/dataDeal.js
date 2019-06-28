const dataDeal = {
  methods: {
    /**
     * 金币加减的处理方法
     * @param num
     */
    moneyChange(num) {
      this.$store.dispatch('moneyChange', num);
    },
    /**
     * 经验增加的方法
     * @param num
     */
    expChange(num) {
      this.$store.dispatch('expChange', num);
    },

    /**
     * 升级装备的方法
     * @param obj
     */
    equipmentsLevelChange(obj) {
      this.$store.dispatch('equipmentsLevelChange', obj);
    },

    /**
     * 升级装备的方法
     * @param obj
     */
    equipmentsStageChange(obj) {
      this.$store.dispatch('equipmentsStageChange', obj);
    }


  }

};
export default dataDeal;
