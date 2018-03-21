<template>
  <div>
    <h1>WORK PAGE</h1>
    <div class="cta">
      <router-link @mouseover.native="mouseoverButton" @mouseout.native="mouseoutButton" class="tactile_button" to="/">button</router-link>
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

  .cta {
    width: 300px;
    margin: auto;
    text-align: center;
  }

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