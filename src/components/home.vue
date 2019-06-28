<template>
  <div>
    <public-header></public-header>

    <div class="home-content">

      <home-content v-if="showingComponent === ''"></home-content>


      <player v-else-if="showingComponent === 'player'"></player>


      <equipments v-else-if="showingComponent === 'equipments'"></equipments>


      <skills v-else-if="showingComponent === 'skills'"></skills>


      <backpack v-else></backpack>

    </div>

    <public-foot
      @showComponentChange="showComponentChange"
    >
    </public-foot>
  </div>
</template>

<script>
  import publicHeader from './publicComponent/publicHeader'
  import publicFoot from './publicComponent/publicFoot'

  import player from './singleComponents/player'
  import homeContent from './singleComponents/homeContent'
  import equipments from './singleComponents/equipments'
  import skills from './singleComponents/skills'
  import backpack from './singleComponents/backpack'

  export default {
    name: "home",
    components: {
      publicHeader,
      publicFoot,
      player,
      homeContent,
      equipments,
      skills,
      backpack
    },
    props: {},
    computed: {
    },
    watch: {},
    data() {
      return {
        showingComponent:''
      }
    },
    created() {
    },
    mounted() {
    },
    methods: {
      /**
       * 改变当前显示组件
       * @param type
       */
      showComponentChange(type){
        this.showingComponent = type;
      }
    }
  }
</script>

<style scoped>
  .home-content {
    height: 83vh;
    padding: 5px;
    background: #ccc;
    border-radius: 5px;
  }
</style>
