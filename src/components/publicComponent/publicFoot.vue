<template>
  <div>
    <div class="foot-content">

      <div class="foot-button">

        <div class="single-button"
             :class="{'single-button-line-height': clickedButton === 'player'}"
             @click="buttonClick('player')"
        >
          <span class="button-string">角色</span>
        </div>

        <div class="single-button"
             :class="{'single-button-line-height': clickedButton === 'equipments'}"
             @click="buttonClick('equipments')"
        >
          <span class="button-string">装备</span>
        </div>

        <div class="single-button"
             :class="{'single-button-line-height': clickedButton === 'skills'}"
             @click="buttonClick('skills')"
        >
          <span class="button-string">技能</span>
        </div>

        <div class="single-button"
             :class="{'single-button-line-height': clickedButton === 'backpack'}"
             @click="buttonClick('backpack')"
        >
          <span class="button-string">背包</span>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: "publicFoot",
    components: {},
    props: {},
    computed: {
      ...mapGetters(['player'])
    },
    watch: {},
    data() {
      return {
        clickedButton:''
      }
    },
    created() {
    },
    mounted() {
    },
    methods: {
      /**
       * 底部按钮点击事件
       * @param type
       */
      buttonClick(type){
        let _this = this;
        if(_this.clickedButton === type){
          _this.clickedButton = '';
        }else{
          _this.clickedButton = type;
        }
        _this.$emit('showComponentChange', _this.clickedButton)
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/icons/iconfont.css";

  .foot-content {
    height: 10vh;
    background: rgba(31,24,14,0.6);
    border-radius: 5px;
  }

  .foot-button {
    display: flex;
    padding: 5px 10px;
  }

  .single-button {
    width: 25%;
    background-color: rgba(73,58,38,0.6);
    margin: 4px;
    text-align: center;
    height: 7vh;
    line-height: 7vh;
    border-radius: 8px;
    align-items: center;
  }

  .button-string {
    font-size: 18px;
    font-weight: 600;
  }
  .single-button-line-height{
    color: rgba(244,154,26,0.9);
    box-shadow: -5px -5px 5px rgba(41,41,41,0.9);
  }
</style>
