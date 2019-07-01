<template>
  <div>
    <div class="top-content">


      <div class="top-icon"></div>

      <div class="top-des">
        <div>
          <span class="iconfont resource-icon">&#xe636;</span>
          <span class="resource-num">{{playerAttack}}</span>
        </div>

        <div>
          <span class="iconfont resource-icon">&#xe641;</span>
          <span class="resource-num">{{player.money}}</span>
        </div>

        <div>
          <span class="iconfont resource-icon">&#xe603;</span>
          <span class="resource-num">{{player.exp}} / {{player.exp}}</span>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: "publicHeader",
    components: {},
    props: {},
    computed: {
      ...mapGetters(['player', 'equipments', 'skills'])
    },
    watch: {
      "player.money"() {
        this.getAttack();
      },
    },
    data() {
      return {
        playerAttack: 0
      }
    },
    created() {
      this.getAttack();
    },
    mounted() {
    },
    methods: {
      /**
       * 获取当前攻击力
       */
      getAttack() {
        let _this = this;
        let _equipments = this.equipments,
          _skills = this.skills;
        _this.playerAttack = _this.player.attack;
        for (let key in _equipments) {
          for (let _key in _equipments[key]) {
            if (_key === 'attack') {
              _this.playerAttack += _equipments[key]['attack'];
            }
          }
        }
        for (let key in _skills) {
          for (let _key in _skills[key]) {
            if (_key === 'attack') {
              _this.playerAttack += _skills[key]['attack'];
            }
          }
        }
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/icons/iconfont.css";

  .top-content {
    height: 4vh;
    padding: 5px;
    background: rgba(31, 24, 14, 0.6);
    border-radius: 5px;
  }

  .top-des {
    display: flex;
    justify-content: space-around;
  }

  .top-des > div {
    width: 33%;
  }

  .resource-icon {
    font-size: 25px;
  }

  .resource-num {
    font-size: 20px;
  }
</style>
