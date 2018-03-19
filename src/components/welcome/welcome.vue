<template>
  <div id="welcome">
    <h1>Time to learn something new!</h1>
    <p>You found the best place to learn - and now you're just one sign in (or sign up) away from it!</p>
    <div class="cta">
      <router-link @mouseover.native="mouseoverButton" @mouseout.native="mouseoutButton" class="tactile_button" to="/signup">Sign Up</router-link>
      <router-link @mouseover.native="mouseoverButton" @mouseout.native="mouseoutButton" class="tactile_button" to="/signin">Sign In</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      red: '#ff5063',
      black: '#000000'
    }
  },
  methods:{
    mouseoverButton(e){
        TweenMax.to(e.target, .2, {backgroundColor:this.black, ease:Power2.easeIn});
      },
      mouseoutButton(e){
        TweenMax.to(e.target, .2, {backgroundColor:this.red, ease:Power2.easeOut});
      }
  }
}
</script>

<style lang="scss" scoped>

  @import '../../styles/custom-bootstrap.scss';
  @import '../../../node_modules/bootstrap/scss/bootstrap.scss';

  #welcome {
    width: 80%;
    margin: auto;
  }

  h1 {
    text-align: center;
  }

  p {
    text-align: center;
  }

  .cta {
    width: 300px;
    margin: auto;
    text-align: center;
  }

  // .cta a {
  //   margin: 10px;
  //   text-decoration: none;
  //   display: inline-block;
  //   border: 1px solid #521751;
  //   border-radius: 3px;
  //   width: 100px;
  //   padding: 10px;
  //   box-sizing: border-box;
  //   color: #521751;
  // }

  // .cta a:hover,
  // .cta a:active {
  //   background-color: #521751;
  //   color: white;
  // }

  .cta a {
    text-decoration: none;
    color: #ffffff;
    margin: 10px;
    padding:10px;
    width:100px;
  }

  .cta a:hover,
  .cta a:active,
  .cta a.router-link-active {
    //color: #fa923f;
    text-decoration:none;
    color:#ffffff;
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

  .tactile_button {
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