<template>
  <div class="container-fluid px-0">
    <div id="dashboard" class="px-0">
      <h1>That's the dashboard!</h1>
      <p>You should only get here if you're authenticated!</p>
      <p v-if="email">Your email address: {{ email }}</p>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-lg-5 px-0 fill grey-cell">
          <img class="blah" alt="responsive image">
        </div>
        <div class="col-12 col-lg-6 px-0 grey-cell">
          col-12 col-lg-6
        </div>
        <div class="col-12 col-lg-1 px-0 grey-cell">
          col-12 col-lg-1
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    computed: {
      email () {
        return !this.$store.getters.user ? false : this.$store.getters.user.email
      }
    },
    created () {
      this.$store.dispatch('fetchUser')
    }
  }
</script>

<style lang="scss" scoped>

  @import '../../styles/custom-bootstrap.scss';
  @import '../../../node_modules/bootstrap/scss/bootstrap.scss';

// Extra small devices (smart phones, less than 34em)
@media (max-width: 33.9em) { 

}

// Small devices (phones, tablets less than 48em)
@media (max-width: 47.9em) {

}
 
// Medium devices (tablets, small laptops less than 62em)
@media (max-width: 61.9em) {
  .blah{
    content:url("/src/images/guy_with_tattoos_3.jpg");
  }
  .fill{
    
  }
  .grey-cell{
    height:auto;
  }
}

// Large devices (desktops, screens less than 75em)
/*@media (max-width: 74.9em) {*/
@media (min-width: 62em) { 
  .blah{
    content:url("/src/images/guy_with_tattoos_2.jpg");
  }
}

  #dashboard {
    width:100%;
    height:100px;
  }
  
  .fill{
    position:relative;
    display:flex;
    justify-content:left;
    align-items:center;
    overflow:hidden;
  }
  .grey-cell {
    height:calc(100vh - 156px);
    background-color: #e3e3e3;
    border-style:solid;
    border-width: thin;
    border-color:black;
  }
  .blah{
    position:relative;
    left:0;
  }
  h1, p {
    text-align: center;
  }

  p {
    color: red;
  }

  .col-xs-12{
    background-color:red;
    width:100%;
  }
</style>