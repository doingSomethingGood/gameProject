<template>
  <div>

    <div class="skill-content">
      <div
        class="skill"
        v-for="(item, key, index) of skills"
      >
        <div class="skill-icon">
          <img class="skill-icon-img" src="../../../static/imgs/skills/skill6.png" alt="">
        </div>

        <div class="skill-des">
          <div class="string" style="margin-top: 6px">
            {{item.name}}
          </div>

          <div class="skill-level-stage" style="margin-top: 6px">
            <div>
              <span class="string">等级:</span>
              <span class="string">{{item.level}}</span>
            </div>
          </div>
          <div class="attack" style="margin-top: 6px">
            <span class="string">攻击力:</span><span class="string">{{item.attack}}</span>
          </div>
        </div>

        <div class="skill-up">
          <div
            class="string skill-level-up"
            @click="levelUpClick(key)"
          >
            <template v-if="item.level === 0">解锁</template>
            <template v-else>升级</template>
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
    name: "skills",
    mixins: [dataDeal],
    components: {
      publicWindow
    },
    props: {},
    computed: {
      ...mapGetters(['skills', 'player'])
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
       * 浮窗状态改变
       * @param e
       */
      changeShowState(e) {
        this.floating.floatingShow = false;
      },

      /**
       * 升级点击事件
       * @param id
       */
      levelUpClick(id) {
        let obj = {id: id, num: 1};
        let _cost = this.skills[id].levelUpCost;
        let _money = this.player.money;

        if (_cost <= _money) {
          this.moneyChange(-_cost);
          this.skillsLevelChange(obj);
          this.floating.floatingShow = true;
          this.floating.floatingMessage = '升级成功，等级 +1';
          this.floating.textColor = 'green';
        }else {
          this.floating.floatingShow = true;
          this.floating.floatingMessage = '金币不足，请充值。。。';
          this.floating.textColor = 'red';
        }
      },
    }
  }
</script>

<style scoped>
  @import "../../assets/icons/iconfont.css";

  .skill-content {

  }

  .skill {
    display: flex;
    border: 2px dashed #000;
    margin-bottom: 8px;
    padding: 5px;
  }

  .skill-level-stage {
    display: flex;
  }

  .skill-icon {
    width: 10vh;
    height: 10vh;
    border: 1px solid black;
  }

  .skill-icon-img {
    width: 10vh;
    height: 10vh;
  }

  .skill-des {
    width: 50vh;
    padding-left: 10px;
  }

  .skill-up {
    width: 35vh;
    display: flex;
    text-align: center;
    align-items: center;
  }

  .skill-up div {
    padding: 4px;
    border: 1px dashed #000;
  }

  .string {
    font-size: 16px;
  }

  .skill-level-up {
    margin-left: 50px;
  }

</style>
