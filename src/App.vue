<template>
    <div class="container-fluid px-0 h-100">
        <app-header></app-header>
        <transition name="slide" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
  import Header from './components/header/header.vue'
  export default {
    name: 'app',
    components: {
      'appHeader': Header
    },
    created () {
      this.$store.dispatch('tryAutoLogin')
    }
  }
</script>

<style lang="scss">
  
    @import './styles/custom-bootstrap.scss';
    @import '../node_modules/bootstrap/scss/bootstrap.scss';

  body, html {
    /* margin: 0; */
    /* padding: 30px; */
    padding:0px;
    height: 100%;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  .slide-enter-active {
      animation: slide-in 200ms ease-out forwards;
  }

  .slide-leave-active {
      animation: slide-out 200ms ease-out forwards;
  }

  @keyframes slide-in {
      from {
          transform: translateY(-30px);
          opacity: 0;
      }
      to {
          transform: translateY(0);
          opacity: 1;
      }
  }

  @keyframes slide-out {
      from {
          transform: translateY(0);
          opacity: 1;
      }
      to {
          transform: translateY(-30px);
          opacity:0;
      }
  }
</style>