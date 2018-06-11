<template>
  <div class="row mx-0">
    <header id="header">
      <b-navbar class="bnavbar" toggleable>
        <b-navbar-brand>BootstrapVue</b-navbar-brand>
        <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
        <b-collapse is-nav id="nav_dropdown_collapse">
          <b-navbar-nav class="nav_rightside ml-auto">
            <li v-if="!auth">
              <router-link @mouseover.native="mouseoverTextlink" @mouseout.native="mouseoutTextlink" active-class="active" class="nav-link header-button" to="/signin">Sign In</router-link>
            </li>
            <li v-if="!auth">
              <router-link @mouseover.native="mouseoverTextlink" @mouseout.native="mouseoutTextlink" class="nav-link header-button" to="/signup">Sign Up</router-link>
            </li>
            <li v-if="auth">
              <router-link @click="activate(1)" @mouseover.native="mouseoverTextlink" @mouseout.native="mouseoutTextlink" class="nav-link header-button" to="/home">Home</router-link>
            </li>
            <li v-if="auth">
              <router-link @click="activate(1)" @mouseover.native="mouseoverTextlink" @mouseout.native="mouseoutTextlink" class="nav-link header-button" to="/about">About</router-link>
            </li>
            <li v-if="auth">
              <router-link @click="activate(1)" @mouseover.native="mouseoverTextlink" @mouseout.native="mouseoutTextlink" class="nav-link header-button" to="/work">Work</router-link>
            </li>
            <li v-if="auth">
              <router-link @click="activate(1)" @mouseover.native="mouseoverTextlink" @mouseout.native="mouseoutTextlink" class="nav-link header-button" to="/dashboard">Dashboard</router-link>
            </li>
            <li v-if="auth">
              <button @mouseover="mouseoverButton" @mouseout="mouseoutButton" @click="onLogout" class="logout nav-link">Logout</button>
            </li>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </header>
  </div>

  
</template>

<script>
  // import { tween, styler } from 'popmotion';
  import { TweenMax } from 'gsap';

  export default {
    data(){
      return {
        isDropdownOpen: false,
        red: '#ff5063',
        black: '#000000',
        white: '#ffffff'
      }
    },
    computed: {
      auth () {
        return this.$store.getters.isAuthenticated
      }
    },
    methods: {
      onLogout() {
        this.$store.dispatch('logout');
      },
      mouseoverButton(e){
        TweenMax.to(e.target, .2, {backgroundColor:this.black, color:this.white, ease:Power2.easeIn});
      },
      mouseoutButton(e){
        TweenMax.to(e.target, .2, {backgroundColor:this.red, ease:Power2.easeOut});
      },
      mouseoverTextlink(e){
        TweenMax.to(e.target, .2, {color:this.red, ease:Power2.easeOut});
      },
      mouseoutTextlink(e){
        TweenMax.to(e.target, .2, {color:this.black, ease:Power2.easeIn});
      }
    }
  }
</script>

<style lang="scss" scoped>

  @import '../../styles/custom-bootstrap.scss';
  @import '../../../node_modules/bootstrap/scss/bootstrap.scss';

  #header {
    height: 56px;
    width:100%;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    // align-items: center;
    background-color: $white;
    // padding: 15px 20px;
  }

  .bnavbar {
    background-color: $white;
    width:100%;
  }

  .navbar-light .navbar-nav .nav-link{
    text-decoration:none;
    color: $black;
  }

  .navbar-nav a.router-link-active {
    font-weight: bold;
    color: $red !important;
  }

  .navbar-light .navbar-nav .logout{
    border: none;
    font: inherit;
    color: $white;
    cursor: pointer;
    background-color: $red;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
  }

  #nav_dropdown_collapse {
    //margin-top:200px;
    background-color:$white;
  }

  .navbar-inverse {
    width: 100% !important;
    border-radius: 0;
  }

  .nav_rightside *{
    margin: 0 0 0 12px;
  }

  .header-button{
    cursor: pointer;
    color:black;
  }

  //ELEMENTS
  .button-container {
    padding: 100px 0;
    text-align: center;
  }
</style>