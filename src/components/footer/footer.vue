<template>
  <div class="row mx-0">
  <header id="footer">
    <div class="logo">
      <router-link to="/">Vue - Complete Guide</router-link>
    </div>
    <nav>
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
    </nav>
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

  #footer {
    height: 56px;
    width:100%;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    background-color: $white;
    padding: 15px 20px;
  }

  #footer .navbar {
    padding-right: 15px;
    padding-left: 15px;
    width: 100% !important;
}

.navbar-inverse {
  width: 100% !important;
  border-radius: 0;
}


  .logo {
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    color: $black;
  }

  .logo a {
    text-decoration: none;
    color: $black;
  }

  nav {
    height: 100%;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
  }

  li {
    margin: 0 16px;
  }

  li a {
    text-decoration: none;
    color: $black;
  }

  li a:hover,
  li a:active,
  li a.router-link-active {
    //color: #fa923f;
    text-decoration:none;
    color:#000000;
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