<template>
  <div class="container">
    <transition name="fade">
      <div
        class="container-text"
        v-if="this.needFloating"
        :style="{color:this.floating['textColor']}"
        @click="changeShowState"
      >
        {{this.floating.floatingMessage}}
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "FloatingWindow",
    props: {
      floating: Object
    },
    data() {
      return {
        needFloating: this.floating['floatingShow']
      }
    },
    methods: {
      changeState() {
        setTimeout(() => {
          this.needFloating = false;
          this.changeShowState();
        }, 800)
      },
      changeShowState() {
        this.$emit('changeShowStated', true)
      }
    },
    watch: {
      'floating.floatingShow'(value) {
        this.needFloating = value;
        this.changeState();
      }
    }
  }
</script>

<style scoped>
  .container {
    position: relative
  }

  .fade-leave-active {
    transition: all .8s
  }

  .fade-leave-to {
    transform: translateY(-50px);
    opacity: 0
  }

  .container-text {
    position: absolute;
    top: -460px;
    left: 90px;
    width: 200px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    /*color: green;*/
  }


</style>
