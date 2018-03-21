<template>
  <div class="row mx-0">
    <header id="header">
    <!-- <div class="logo">
      <router-link to="/">Vue - Complete Guide</router-link>
    </div> -->
    <!-- <nav>
      <ul>
        <li v-if="!auth">
          <router-link @mouseover.native="mouseoverTextlink" @mouseout.native="mouseoutTextlink" active-class="active" class="header-button" to="/signup">Sign Up</router-link>
        </li>
        <li v-if="!auth">
          <router-link @mouseover.native="mouseoverTextlink" @mouseout.native="mouseoutTextlink" active-class="active" class="header-button" to="/signin">Sign In</router-link>
        </li>
        <li v-if="auth">
          <router-link @mouseover.native="mouseoverTextlink" @mouseout.native="mouseoutTextlink" active-class="active" class="header-button" to="/home">Home</router-link>
        </li>
        <li v-if="auth">
          <router-link @mouseover.native="mouseoverTextlink" @mouseout.native="mouseoutTextlink" active-class="active" class="header-button" to="/about">About</router-link>
        </li>
        <li v-if="auth">
          <router-link @mouseover.native="mouseoverTextlink" @mouseout.native="mouseoutTextlink" active-class="active" class="header-button" to="/work">Work</router-link>
        </li>
        <li v-if="auth">
          <router-link @mouseover.native="mouseoverTextlink" @mouseout.native="mouseoutTextlink" active-class="active" class="header-button" to="/dashboard">Dashboard</router-link>
        </li>
        <li v-if="auth">
            <button @mouseover="mouseoverButton" @mouseout="mouseoutButton" @click="onLogout" class="logout">Logout</button>
        </li>
      </ul>
    </nav> -->

    <!-- <nav class="navbar navbar-toggleable-md">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <ul>
        <li v-if="!auth">
          <router-link @mouseover.native="mouseoverTextlink" @mouseout.native="mouseoutTextlink" active-class="active" class="header-button" to="/signup">Sign Up</router-link>
        </li>
        <li v-if="!auth">
          <router-link @mouseover.native="mouseoverTextlink" @mouseout.native="mouseoutTextlink" active-class="active" class="header-button" to="/signin">Sign In</router-link>
        </li>
        <li v-if="auth">
          <router-link @mouseover.native="mouseoverTextlink" @mouseout.native="mouseoutTextlink" active-class="active" class="header-button" to="/home">Home</router-link>
        </li>
        <li v-if="auth">
          <router-link @mouseover.native="mouseoverTextlink" @mouseout.native="mouseoutTextlink" active-class="active" class="header-button" to="/about">About</router-link>
        </li>
        <li v-if="auth">
          <router-link @mouseover.native="mouseoverTextlink" @mouseout.native="mouseoutTextlink" active-class="active" class="header-button" to="/work">Work</router-link>
        </li>
        <li v-if="auth">
          <router-link @mouseover.native="mouseoverTextlink" @mouseout.native="mouseoutTextlink" active-class="active" class="header-button" to="/dashboard">Dashboard</router-link>
        </li>
        <li v-if="auth">
            <button @mouseover="mouseoverButton" @mouseout="mouseoutButton" @click="onLogout" class="logout">Logout</button>
        </li>
      </ul>
    </nav> -->
      <b-navbar class="bnavbar" toggleable>
        <b-navbar-brand>BootstrapVue</b-navbar-brand>
        <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
        <b-collapse is-nav id="nav_dropdown_collapse">
          <b-navbar-nav ml-auto>
            <b-nav-item href="#">Home</b-nav-item>
            <b-nav-item href="#">Link</b-nav-item>
            <!-- Navbar dropdowns -->
            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown text="User" right>
              <b-dropdown-item href="#">Account</b-dropdown-item>
              <b-dropdown-item href="#">Settings</b-dropdown-item>
            </b-nav-item-dropdown>
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
        black: '#000000'
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
        TweenMax.to(e.target, .2, {backgroundColor:this.black, ease:Power2.easeIn});
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

  .router-link-active,
  {
    color: $red;
  }

  .active {
    color:$purple;
  }

  #header {
    height: 56px;
    width:100%;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    // align-items: center;
    background-color: $white;
    padding: 15px 20px;
  }

  .bnavbar {
    background-color: $white;
    width:100%;
  }
  .b-nav-item {
    color: $red;
  }
  #nav_dropdown_collapse {
    //margin-top:200px;
    background-color:$white;
  }

  .navbar-inverse {
    width: 100% !important;
    border-radius: 0;
  }

  // .navbar {
  //   padding-right: 15px;
  //   padding-left: 15px;
  //   width: 100% !important;
  // }

  // .bg-info {
  //   background-color: $white !important;
  // }
  // .navbar-inverse {
  //   width: 100% !important;
  //   border-radius: 0;
  // }


  // .logo {
  //   font-family: 'Open Sans', sans-serif;
  //   font-weight: bold;
  //   color: $black;
  // }

  // .logo a {
  //   text-decoration: none;
  //   color: $black;
  // }

  // nav {
  //   height: 100%;
  // }

  // ul {
  //   list-style: none;
  //   margin: 0;
  //   padding: 0;
  //   height: 100%;
  //   display: flex;
  //   flex-flow: row;
  //   align-items: center;
  // }

  // li {
  //   margin: 0 16px;
  // }

  // li a {
  //   text-decoration: none;
  //   color: $black;
  // }

  // li a:hover,
  // li a:active,
  // li a.router-link-active {
  //   //color: #fa923f;
  //   text-decoration:none;
  //   color:#000000;
  // }

  .header-button{
    cursor: pointer;
    color:black;
  }

  //ELEMENTS
  .button-container {
    padding: 100px 0;
    text-align: center;
  }

  .logout {
    border: none;
    font: inherit;
    color: white;
    cursor: pointer;
    background-color:#ff5063;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    
  }
</style>