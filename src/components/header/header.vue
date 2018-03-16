<template>
  <div class="row mx-0">
  <header id="header">
    <div class="logo">
      <router-link to="/">Vue - Complete Guide</router-link>
    </div>
    <nav>
      <ul>
        <li v-if="!auth">
          <router-link to="/signup">Sign Up</router-link>
        </li>
        <li v-if="!auth">
          <router-link to="/signin">Sign In</router-link>
        </li>
        <li v-if="auth">
          <router-link to="/dashboard">Dashboard</router-link>
        </li>
        <li v-if="auth">
            <button @click="onLogout" class="logout">Logout</button>
        </li>
      </ul>
    </nav>
  </header>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        isDropdownOpen: false
      }
    },
    computed: {
      auth () {
        return this.$store.getters.isAuthenticated
      }
    },
    methods: {
      onLogout() {
        this.$store.dispatch('logout')
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
    align-items: center;
    background-color: #ffffff;
    padding: 15px 20px;
  }

  #header .navbar {
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
    color: #000000;
  }

  .logo a {
    text-decoration: none;
    color: #000000;
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
    color: #000000;
  }

  li a:hover,
  li a:active,
  li a.router-link-active {
    color: #fa923f;
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