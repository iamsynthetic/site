<template>
  <div id="footer">
    <!-- <div v-if="auth">
      <div class="logout">Welcome <span class="nickname"> {{ user.nickname }}</span></div>
    </div> -->
    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-12 col-sm-6">
          <div class="float-left">
            <p>&#169; 2018 ***** - All Rights Reserved.</p>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6">
          <div class="ondesktop float-right">
            <ul>
              <li><router-link @mouseover.native="mouseoverTextlink" @mouseout.native="mouseoutTextlink" @click.native="closeNav" to="/">SITEMAP</router-link></li>
              <li><router-link @mouseover.native="mouseoverTextlink" @mouseout.native="mouseoutTextlink" @click.native="closeNav" to="/contact">CONTACT</router-link></li>
            </ul>
          </div>
          <div class="onmobile">
            <ul>
              <li><router-link @mouseover.native="mouseoverTextlink" @mouseout.native="mouseoutTextlink" @click.native="closeNav" to="/">SITEMAP</router-link></li>
              <li><router-link @mouseover.native="mouseoverTextlink" @mouseout.native="mouseoutTextlink" @click.native="closeNav" to="/contact">CONTACT</router-link></li>
            </ul>
          </div>
        </div>

        </div>
    </div>

<!--
    <div class="col-12">
    <div class="pull-left">
      <p>&#169; 2018 ***** - All Rights Reserved.</p>
    </div>
    </div>
    <div class="col-12">
    <div class="pull-right">
      <ul>
        <li><router-link @mouseover.native="mouseoverTextlink" @mouseout.native="mouseoutTextlink" @click.native="closeNav" to="/">SITEMAP</router-link></li>
        <li><router-link @mouseover.native="mouseoverTextlink" @mouseout.native="mouseoutTextlink" @click.native="closeNav" to="/contact">CONTACT</router-link></li>
      </ul>
    </div>
    </div>
    -->
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
      },
      user (){
        console.log('user')
        return this.$store.getters.user
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
    //width:100%;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    //background-color: $white;
    padding: 15px 20px;
    margin-bottom:10px;
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

  .ondesktop li {
    margin-left: 32px;
  }

  .onmobile li {
    margin-right: 16px;
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

  .nickname{
    font-weight: bold;
    color: $green;
  }
  
  @media only screen and (min-width: 577px) {
    .ondesktop {
        display:block;
    }
    .onmobile {
      display:none;
    }
  }

  @media only screen and (max-width: 576px) {
    .ondesktop {
        display:none;
    }
    .onmobile {
      display:block;
    }
  }
</style>