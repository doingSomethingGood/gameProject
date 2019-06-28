<template>
  <div>
    <div class="equipments-content">
      <div
        class="equipment"
        v-for="(item, key, index) of equipments"
      >
        <div class="equipment-icon">
          <img class="equipment-icon-img" src="../../../static/imgs/equipments/eht.png" alt="">
        </div>

        <div class="equipment-des">
          <div class="string" style="margin-top: 6px">
            {{item.name}}
          </div>
          <div class="attack" style="margin-top: 6px">
            <span class="string">攻击力:</span><span class="string">{{item.attack}}</span>
          </div>
          <div class="equipment-level-stage" style="margin-top: 6px">
            <div style="margin-right: 10px">
              <span class="string">阶别:</span>
              <span class="string">{{item.stage}}</span>
            </div>
            <div>
              <span class="string">等级:</span>
              <span class="string">{{item.level}}</span>
            </div>

          </div>
        </div>

        <div class="equipment-up">
          <div
            class="string equipment-stage-up"
            @click="stageUpClick(key)"
          >
            升阶
          </div>

          <div
            class="string equipment-level-up"
            @click="levelUpClick(key)"
          >
            升级
          </div>
        </div>
      </div>
    </div>

    <public-window :floating="this.floating" @changeShowStated="changeShowState"></public-window>

  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import publicWindow from '../publicComponent/FloatingWindow'
  import dataDeal from '../../mixins/dataDeal'

  export default {
    name: "equipments",
    mixins: [dataDeal],
    components: {
      publicWindow
    },
    props: {},
    computed: {
      ...mapGetters(['equipments', 'player'])
    },
    watch: {},
    data() {
      return {
        floating: {
          floatingShow: false,
          textColor: 'green',
          floatingMessage: '升级成功'
        }
      }
    },
    created() {
    },
    mounted() {
    },
    methods: {
      /**
       * 升阶点击事件
       * @param id
       */
      stageUpClick(id) {
        let obj = {id: id, num: 1};
        let _cost = this.equipments[id].stageUpCost;
        let _money = this.player.money;

        if (_cost <= _money) {
          this.moneyChange(-_cost);
          this.equipmentsStageChange(obj);
          this.floating.floatingShow = true;
          this.floating.floatingMessage = '升阶成功，等阶 +1';
          this.floating.textColor = 'green';
        } else {
          this.floating.floatingShow = true;
          this.floating.floatingMessage = '金币不足，请充值。。。';
          this.floating.textColor = 'red';
        }
      },

      /**
       * 升级点击事件
       * @param id
       */
      levelUpClick(id) {
        let obj = {id: id, num: 1};
        let _cost = this.equipments[id].levelUpCost;
        let _money = this.player.money;

        if (_cost <= _money) {
          this.moneyChange(-_cost);
          this.equipmentsLevelChange(obj);
          this.floating.floatingShow = true;
          this.floating.floatingMessage = '升级成功，等级 +1';
          this.floating.textColor = 'green';
        }else {
          this.floating.floatingShow = true;
          this.floating.floatingMessage = '金币不足，请充值。。。';
          this.floating.textColor = 'red';
        }


      },



      changeShowState(e) {
        this.floating.floatingShow = false;
      }

    }
  }
</script>

<style scoped>
  @import "../../assets/icons/iconfont.css";

  .equipments-content {

  }

  .equipment {
    display: flex;
    border: 2px dashed #000;
    margin-bottom: 8px;
    padding: 5px;
  }

  .equipment-level-stage {
    display: flex;
  }

  .equipment-icon {
    width: 10vh;
    height: 10vh;
    border: 1px solid black;
  }

  .equipment-icon-img {
    width: 10vh;
    height: 10vh;
  }

  .equipment-des {
    width: 50vh;
    padding-left: 10px;
  }

  .equipment-up {
    width: 35vh;
    display: flex;
    text-align: center;
    align-items: center;
  }

  .equipment-up div {
    padding: 4px;
    border: 1px dashed #000;
  }

  .string {
    font-size: 16px;
  }

  .equipment-level-up {
    margin-left: 10px;
  }

</style>
