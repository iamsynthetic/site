<template>
  <div id="home">
    <div class="section1">
      <div class="section1-container">
        <h1 class="title">Some Words Go Here</h1>
        <p class="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc arcu ante, tincidunt posuere tortor ut.</p>
        <div class="cta">
          <router-link @mouseover.native="mouseoverButton" @mouseout.native="mouseoutButton" class="tactile_button" to="/">button</router-link>
        </div>
      </div>
    </div>
    <div class="section2">
      <div class="section2-container">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-1 col-lg-3">
              <!-- <p>col 1</p> -->  
            </div>
            <div class="col-sm-10 col-lg-6">
              <div class="row">
                <div class="col-sm-12">
                  <h1 class="title">Title for About Preview</h1>
                </div>
              </div>
              <div class="row">
                <div class="col-2">
                  <hr class="line">
                </div>
                <div class="col-sm-10">
                  <p class="sub-title">Sub Head something like what we do</p>
                </div>
              </div>
              <div class="row">
                <div class="col-2">
                </div>
                <div class="col-10">
                  <p class="paragraph">My adventure has all been in my mind. The great adventure has been thinking. I love to think about things. I think that the lack of drama in my life has produced a platform for me to be fundamentally adventurous in my thinking.</p>
                  <div class="cta">
                    <router-link @mouseover.native="mouseoverButton" @mouseout.native="mouseoutButton" class="tactile_button" to="/">button</router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-1 col-lg-3">
              <!-- <p>col 3</p> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section3">
      <div class="section3-container">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-1 col-lg-2">
            </div>
            <div class="col-sm-10 col-lg-8">
              <div class="row">
                <div class="col">
                  <h1 class="title">Work Preview</h1>
                  <hr class="line">
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <p class="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc arcu ante, tincidunt posuere tortor ut.</p>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <div class="img-container">
                    <img class="portfolio-image" src="/src/images/purpleface_sized.jpg">
                  </div>
                  <div class="cta">
                    <router-link @mouseover.native="mouseoverButton" @mouseout.native="mouseoutButton" class="tactile_button" to="/">button</router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-1 col-lg-2">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section4">
      <div class="section4-container">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-1 col-lg-3">
              <!-- <p>col 1</p> -->  
            </div>
            <div class="col-sm-10 col-lg-6">
              <div class="row">
                <div class="col-sm-12">
                  <h1 class="title">Title for Brands Preview</h1>
                </div>
              </div>
              <div class="row">
                <div class="col-2">
                  <hr class="line">
                </div>
                <div class="col-sm-10">
                  <p class="sub-title">Sub Head something a little bit about what i did for clients</p>
                </div>
              </div>
              <div class="row">
                <div class="col-2">
                </div>
                <div class="col-10">
                  <p class="paragraph">pitch paragraph Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc arcu ante, tincidunt posuere tortor ut, venenatis dignissim augue. Nullam rhoncus facilisis urna sed ultrices. Sed dui diam, dictum eleifend elit non, rutrum feugiat erat. Nunc quis velit vulputate, pellentesque nibh vel, pellentesque sem. Sed aliquet lorem ac suscipit porttitor. Aenean tristique rhoncus commodo. Quisque sed sagittis erat, ac luctus massa.</p>
                  <div class="cta">
                    <router-link @mouseover.native="mouseoverButton" @mouseout.native="mouseoutButton" class="tactile_button" to="/">button</router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-1 col-lg-3">
              <!-- <p>col 3</p> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section5">
      <div class="section5-container">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-1 col-lg-3">
              <!-- <p>col 1</p> -->  
            </div>
            <div class="col-sm-10 col-lg-6">
              <div class="row">
                <div class="col-sm-12">
                  <h1 class="title">Title for Contact Preview</h1>
                </div>
              </div>
              <div class="row">
                <div class="col-2">
                  <hr class="line">
                </div>
                <div class="col-sm-10">
                  <p class="sub-title">Sub Head something funny about contact</p>
                </div>
              </div>
              <div class="row">
                <div class="col-2">
                </div>
                <div class="col-10">
                  <p class="paragraph">small contact note Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc arcu ante, tincidunt posuere tortor ut, venenatis dignissim augue. Nullam rhoncus facilisis urna sed ultrices. Sed dui diam, dictum eleifend elit non, rutrum feugiat erat. Nunc quis velit vulputate, pellentesque nibh vel, pellentesque sem. Sed aliquet lorem ac suscipit porttitor. Aenean tristique rhoncus commodo. Quisque sed sagittis erat, ac luctus massa.</p>
                  <div class="cta">
                    <router-link @mouseover.native="mouseoverButton" @mouseout.native="mouseoutButton" class="tactile_button" to="/">button</router-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-1 col-lg-3">
              <!-- <p>col 3</p> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="section6">
      <div class="section6-container">
        <div class="container-fluid">
          <div class="row"> -->
              <app-footer class="section6-container"></app-footer>
          <!--</div>
        </div>
      </div>
    </div>-->
  </div>
</template>

<script>

import Footer from '../footer/footer.vue'

export default {

  created(){
     /*
      // Scrolling Core
      animationTime    : 400, // [ms]
      stepSize         : 100, // [px]

      // Acceleration
      accelerationDelta : 50,  // 50
      accelerationMax   : 3,   // 3

      // Keyboard Settings
      keyboardSupport   : true,  // option
      arrowScroll       : 50,    // [px]

      // Pulse (less tweakable)
      // ratio of "tail" to "acceleration"
      pulseAlgorithm   : true,
      pulseScale       : 4,
      pulseNormalize   : 1,

      // Other
      touchpadSupport   : false, // ignore touchpad by default
      fixedBackground   : true, 
      excluded          : ''    
  */ 
    this.$SmoothScrollWebSitesOptions = { keyboardSupport: false } 
    this.$SmoothScrollWebSites({ stepSize: 30, accelerationDelata: 50, accelerationMax: 3, pulseAlgorithm: true, pulseScale: 1, pulseNormalize: 1, });
    
  },
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
  },
  components: {
      'appFooter': Footer
  }
}
</script>

<style lang="scss" scoped>

  @import '../../styles/custom-bootstrap.scss';
  @import '../../../node_modules/bootstrap/scss/bootstrap.scss';

  #home {
    width: 100%;
    height:100%;
    margin: auto;
  }

  .title {
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    //font-style: italic;
    font-size:45px;
    padding-bottom:20px;
  }

  .sub-title {
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    font-style: italic;
    letter-spacing:1px;
    font-size:16px;
  }

  .paragraph {
    font-family: 'Chivo', sans-serif;
    font-weight: 300;
    font-size:14px;
  }

  .section1 {

    background: url(/src/images/clouds.jpg) no-repeat center center; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;

    //background-color: lightgrey;
    width: 100%;
    // //height:720px;
    height:100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .line {
    background-color:$gray-dark;
  }

  .section1-container {
    //background-color: $gray-dark;
    width:100%;
    text-align:center;
  }

  .section1-container h1 {
    text-align: center;
    font-size:70px;
    padding-bottom:10px;
    //line-height:76px;
  }

  .section1-container p {
    text-align: center;
    font-size:14px;
    line-height:16px;
  }

  .section1-container .cta {
    width: 300px;
    height:auto;
    margin: auto;
    padding-top:30px;
    text-align: center;
  }

  .section1-container .cta a {
    text-decoration: none;
    color: #ffffff;
    //margin: 10px;
    padding:10px;
    width:100px;
  }

  .section2-container {
    width:100%;
    //text-align:center;
    margin-top:200px;
  }

  .section3-container {
    //background-color: $gray-dark;
    width:100%;
    text-align:center;
    margin-top:200px;
  }

  // .section3-container h1 {
  //   text-align: center;
  //   font-size:70px;
  //   padding-bottom:10px;
  // }

  .section3-container p {
    text-align: center;
    font-size:14px;
    line-height:16px;
  }

  .section3-container .cta {
    width: 300px;
    height:auto;
    margin: auto;
    padding-top:30px;
    text-align: center;
  }

  .section3-container .cta a {
    text-decoration: none;
    color: #ffffff;
    //margin: 10px;
    padding:10px;
    width:100px;
  }

  .section3-container .line {
    width:100px;
  }

  .section3-container .img-container {
    //max-width:1200px;
  }

  .section3-container .img-container .portfolio-image {
    //height:700px;
    width:100%;
  }

  .section4-container {
    width:100%;
    //text-align:center;
    margin-top:200px;
  }

  .section5-container {
    width:100%;
    //text-align:center;
    margin-top:200px;
  }

  .section6-container {
    //width:100%;
    //text-align:center;
    margin-top:200px;
  }

  .cta {
    //width: 300px;
    //height:auto;
    //margin: auto;
    padding-top:20px;
    //text-align: center;
  }

  .cta a {
    text-decoration: none;
    color: #ffffff;
    //margin: 10px;
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