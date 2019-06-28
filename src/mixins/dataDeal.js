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
    }
  }

};
export default dataDeal;
