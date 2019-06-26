<template>
    <div>
      <public-header></public-header>

      <button @click="numAdd">++++</button>

      <div class="home-content">
        this is homeContent {{player.attack}}
      </div>

      <public-foot></public-foot>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import publicHeader from './publicComponent/publicHeader'
  import publicFoot from './publicComponent/publicFoot'
    export default {
        name: "home",
        components: {
          publicHeader,
          publicFoot
        },
        props: {},
        computed: {
          ...mapGetters(['player'])

        },
        watch: {},
        data() {
            return {}
        },
        created() {
        },
        mounted() {
        },
        methods: {
          numAdd(){
            this.$store.dispatch('addFunction', 'vvv');
          }
        }
    }
</script>

<style scoped>

</style>
