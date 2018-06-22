<template>
    <div class="container-fluid px-0 h-100 site-wrapper">
        <div class="site-wrapper-inner">
            <app-header class="masthead clearfix"></app-header>
            <transition name="slide" mode="out-in">
                <router-view class="content-wrapper"></router-view>
            </transition>
            <app-footer class="footer clearfix"></app-footer>
        </div>
    </div>
</template>

<script>
  import Header from './components/header/header.vue'
  import Footer from './components/footer/footer.vue'

  export default {
    name: 'app',
    components: {
      'appHeader': Header,
      'appFooter': Footer
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
    padding:0px;
    height: 100%;
    background-color: $base_white;
    line-height: 2;
    font-size: 12px;
    font-family: 'Open Sans', sans-serif;
  }
  .site-wrapper {
      display:table;
      width:100%;
      height:100%;
  }
  .site-wrapper-inner{
      //display:table-cell;
      //vertical-align:middle;
      margin:auto;
      //margin-top:calc(20vh);
  }
  .masthead{
      width:100%;
      position: fixed;
      top: 0;
      z-index:1000;
  }
  .footer{
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 60px;
      line-height: 60px;
  }
  .content-wrapper{
      vertical-align: middle;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
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