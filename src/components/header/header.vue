<template>
  <div class="row mx-0">
    <!-- <header id="header">
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
    </header> -->
    <div>

      <div id="mySidenav" class="sidenav">
        <div class="row sidenav-container">
          
          <div class="col-md-8 col-lg-6 sidenav-images">
            <!-- <div class="slider-card" v-for="(slide, index) in slides" :class="randomClass(index)"> -->
            <div class="img-container" :id="slides[0].title" @mouseover="sliderCardOver" @mouseout="sliderCardOut">
              <p :id="slides[0].id" class="slider-card-txt">{{ slides[0].title }}</p>
              <img class="slider-card-img" :src="slides[0].image" :alt="slides[0].title"/>
            </div>
            <div class="img-container" :id="slides[1].title" @mouseover="sliderCardOver" @mouseout="sliderCardOut">
              <p :id="slides[1].id" class="slider-card-txt">{{ slides[1].title }}</p>
              <img class="slider-card-img" :src="slides[1].image" :alt="slides[1].title"/>
            </div>
          </div>

          <div class="col-sm-12 col-md-4 col-lg-6 sidenav-links sidenav-desktop">
            <a href="javascript:void(0)" class="closebtn" @mouseover="mouseoverTextlink" @mouseout="mouseoutTextlink" @click="closeNav">&times;</a>
            <ul>
              <li><router-link @mouseover.native="mouseoverTextlink" @mouseout.native="mouseoutTextlink" @click.native="closeNav" to="/">Home</router-link></li>
              <li><router-link @mouseover.native="mouseoverTextlink" @mouseout.native="mouseoutTextlink" @click.native="closeNav" to="/about">About</router-link></li>
              <li><router-link @mouseover.native="mouseoverTextlink" @mouseout.native="mouseoutTextlink" @click.native="closeNav" to="/work">Work</router-link></li>
              <li><router-link @mouseover.native="mouseoverTextlink" @mouseout.native="mouseoutTextlink" @click.native="closeNav" to="/contact">Contact</router-link></li>
            </ul>
          </div>

           <div class="col-sm-12 col-md-12 sidenav-links sidenav-mobile">
            <a href="javascript:void(0)" class="closebtn" @mouseover="mouseoverTextlink" @mouseout="mouseoutTextlink" @click="closeNav">&times;</a>
            <ul>
              <li><router-link @mouseover.native="mouseoverTextlink" @mouseout.native="mouseoutTextlink" @click.native="closeNav" to="/">Home</router-link></li>
              <li><router-link @mouseover.native="mouseoverTextlink" @mouseout.native="mouseoutTextlink" @click.native="closeNav" to="/about">About</router-link></li>
              <li><router-link @mouseover.native="mouseoverTextlink" @mouseout.native="mouseoutTextlink" @click.native="closeNav" to="/work">Work</router-link></li>
              <li><router-link @mouseover.native="mouseoverTextlink" @mouseout.native="mouseoutTextlink" @click.native="closeNav" to="/contact">Contact</router-link></li>
            </ul>
          </div>

        </div>
      </div>

      <div class="square" @mouseover="mouseoverNav" @mouseout="mouseoutNav" @click="openNav"></div>
      <svg id="burger" width="30" class="openmenu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
        <path class="top" d="M0 9h30v2H0z"/>
        <line class="mid" x1="0" y1="15" x2="30" y2="15" stroke="black" stroke-width="2" vector-effect="non-scaling-stroke"/>
        <path class="bot" d="M0 19h30v2H0z"/>
      </svg>


      <!-- Use any element to open the sidenav -->
      <!-- <span style="font-size:30px;cursor:pointer" @click="openNav">&#9776; open</span> -->
    </div>
  </div>
  
</template>

<script>
  // import { tween, styler } from 'popmotion';
  import { TweenMax, TimelineMax } from 'gsap';

  export default {
    data(){
      return {
        slides: [
        {
          title: 'computer desk',
          id: 'computer',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum libero eget risus sodales cursus nec sed velit. Phasellus maximus luctus tellus id fermentum. Nulla facilisi.',
          image: '../../src/images/computer_on_desk.jpg'
        },
        {
          title: 'comic rack',
          id: 'comics',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum libero eget risus sodales cursus nec sed velit. Phasellus maximus luctus tellus id fermentum. Nulla facilisi.',
          image: '../../src/images/comics.jpg'
        }
      ],
        isDropdownOpen: false,
        red: '#ff5063',
        black: '#000000',
        white: '#ffffff',
        controlit:'#burger'
      }
    },
    computed: {
      auth () {
        return this.$store.getters.isAuthenticated
      }
    },
    methods: {
      randomClass (key) {
        console.log('key is: ' + key);
        return 'style' + key;
      },
      mouseoverNav(e){
        //console.log('mouseoverNav is: ')
        //console.log(e)
        //console.log('e.path[0].childNodes[0].classList[0]); is: ' + e.path[0].childNodes[0].classList[0]);
        //var menuToggle = new TimelineMax({paused:true, reversed:true})
        // menuToggle  
        //   .set('', {className:"-=closemenu"})
        //   .set('', {className:"+=openmenu"})
        //   .to(' .top', .2, {y:'-9px', transformOrigin: '50% 50%'}, 'burg')
        //   .to(' .bot', .2, {y:'9px', transformOrigin: '50% 50%'}, 'burg')
        //   .to(' .mid', .2, {scale:0.1, transformOrigin: '50% 50%'}, 'burg')
        //   .add('rotate')
        //   .to(' .top', .2, {y:'5'}, 'rotate')
        //   .to(' .bot', .2, {y:'-5'}, 'rotate')
        //   .to(' .top', .2, {rotationZ:45, transformOrigin: '50% 50%'}, 'rotate')
        //   .to(' .bot', .2, {rotationZ:-45, transformOrigin: '50% 50%'}, 'rotate')
        // .set('#burger .mid', {opacity:0})//temp fix for stupid iOS rotate y bug
        
        //TweenMax.to('#burger .top', .2, {x:'10px', rotationZ:45, transformOrigin: '50% 50%', ease:Quint.easeInOut});
        //TweenMax.to('#burger .mid', .3, {x:'8px', rotationZ:45, transformOrigin: '50% 50%', ease:Quint.easeInOut});
        //TweenMax.to('#burger .bot', .2, {x:'2px', rotationZ:45, transformOrigin: '50% 50%', delay:.2, ease:Quint.easeInOut});
        TweenMax.to('#burger .top', .2, {y:'-6px', x:'-2px', rotationZ:-45, transformOrigin: '50% 50%', ease:Quad.easeInOut});
        TweenMax.to('#burger .bot', .2, {y:'6px', x:'-2px', rotationZ:45, transformOrigin: '50% 50%'});
        TweenMax.to('#burger .mid', .2, {scale:0.1, autoAlpha:0, transformOrigin: '50% 50%', ease:Quad.easeInOut});

        //TweenMax.to('.square', 1, {scale:0.1, autoAlpha:.1})

        // controlit.click(function () {
        //   menuToggle.reversed() ? menuToggle.restart() : menuToggle.reverse();
        // });
        
      },
      mouseoutNav(e){
        //TweenMax.to('#burger .top', .2, {x:'0px', rotationZ:0, transformOrigin: '50% 50%', ease:Quint.easeInOut});
        //TweenMax.to('#burger .mid', .3, {x:'0px', rotationZ:0, transformOrigin: '50% 50%', ease:Quint.easeInOut});
        //TweenMax.to('#burger .bot', .2, {x:'0px', rotationZ:0, transformOrigin: '50% 50%', delay:.2, ease:Quint.easeInOut});
        TweenMax.to('#burger .top', .2, {y:'0px', x:'0px', rotationZ:0, transformOrigin: '50% 50%', ease:Quad.easeInOut});
        TweenMax.to('#burger .bot', .2, {y:'0px', x:'0px', rotationZ:0, transformOrigin: '50% 50%'});
        TweenMax.to('#burger .mid', .2, {scale:1, autoAlpha:1, transformOrigin: '50% 50%', ease:Quad.easeInOut});
        //TweenMax.to('.square', 1, {scale:1, autoAlpha:1})
      },
      openNav() {
          //console.log('mySidenav is open here: ' + document.getElementById("mySidenav"))
          TweenMax.to('#burger', .2, {autoAlpha:0});
          TweenMax.to('.sidenav .closebtn', .2, {autoAlpha:1, delay:.2});
          //TweenMax.to('.sidenav .img-container', .2, {autoAlpha:1});
          //document.getElementById("mySidenav").style.width = "100%";
          document.getElementById("mySidenav").style.left = "0vw";
          document.getElementsByTagName("BODY")[0].style.overflow = "hidden";
      },
      closeNav() {
          //console.log('mySidenav is closed here: ' + document.getElementById("mySidenav"))
          TweenMax.to('#burger', .5, {autoAlpha:1, delay:.7})
          TweenMax.to('.sidenav .closebtn', .2, {autoAlpha:0});
          //TweenMax.to('.sidenav .img-container', .2, {autoAlpha:0});
          //document.getElementById("mySidenav").style.width = "0";
          document.getElementById("mySidenav").style.left = "100vw";
          document.getElementsByTagName("BODY")[0].style.overflow = "auto";
      },
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
        console.log('mouseover text link')
        TweenMax.to(e.target, .2, {color:this.red, ease:Power2.easeOut});
      },
      mouseoutTextlink(e){
        TweenMax.to(e.target, .2, {color:this.black, ease:Power2.easeIn});
      },
      sliderCardOver(e){
        console.log(e)
        console.log('e.path[1].attributes[1].nodeValue); is: ' + e.path[1].attributes[1].nodeValue);
        console.log('e.path[1].children[0].attributes[1].nodeValue is: ' + e.path[1].children[0].attributes[1].nodeValue);
        //var thetxt = '#' + e.path[1].attributes[1].nodeValue;
        var thetxt = '#' + e.path[1].children[0].attributes[1].nodeValue;

        TweenMax.to(e.target, .7, {scaleX:1.05, scaleY:1.05, ease:Power3.easeInOut});
        TweenMax.to(thetxt, .5, {autoAlpha:1});
      },
      sliderCardOut(e){
         var thetxt = '#' + e.path[1].children[0].attributes[1].nodeValue;

        TweenMax.to(e.target, .7, {scaleX:1, scaleY:1, ease:Power3.easeInOut});
        TweenMax.to(thetxt, .5, {autoAlpha:0});
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
    z-index:10;
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

  .square {
    position:absolute;
    right:0;
    width: 32px;
    height: 20px;
    margin-right: 19px;
    margin-top: 25px;
    // background-color:blue;
    // opacity:.4;
    z-index:1;
    cursor: pointer;
  }

  * {
    text-align:center;
  }

  #burger {
    position:absolute;
    right:0;
    margin:20px 20px;
  }
  svg {
    //margin:55px;
    -webkit-perspective:800px;
  }

  .sidenav {
    height: 100%;
    //width: 0;
    width:100%;
    position: fixed;
    z-index: 2;
    top: 0;
    //right: 0;
    left:100vw;
    background-color: $base_white;
    overflow-x: hidden;
    transition: 0.5s;
    //padding-top: 60px;
    text-align:center;
}

.sidenav a {
    // padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    //color: #818181;
    display: block;
    //transition: 0.3s;

}

// .sidenav a:hover{
//     color: #f1f1f1;
// }

.sidenav .closebtn {
    position: absolute;
    top: 0;
    right: 40px;
    font-size: 36px;
    margin-left: 50px;
    opacity:0;
    z-index:2;
}

.sidenav-container{
  height:100vh;
  //background-color:blue;
}

.sidenav-images{
  //background-color:green;
  padding:0;
}
.sidenav-images .img-container{
  //padding-top:50px;
}

.sidenav-links{
  //background-color:$purple;
}
.sidenav-links ul{
  position: absolute;
  top: 50%;
  left:50%;
  transform: translate(-50%, -50%);
  padding:0;
}
.sidenav-links ul li{
  list-style-type: none;
  margin-bottom:20px;
}

.img-container{
    //width:260px;
    //height:200px;
    //width:100vw;
    height:50vh;
    overflow:hidden;
    z-index:1;
    position:relative;
  }
  .slider-card-txt{
    position:absolute;
    z-index:20;
    //float:left;
    text-align:center;
    width:100%;
    top:50%;
    opacity:0;
    color:$base_white;
    font-size:20px;
  }
  .slider-card img {
    width: 100%;
  }
img {
  width:100%;
  
}
@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
@media screen and (max-width: 768px) {
  .sidenav-images{
    display:none;
  }
  .sidenav-desktop{
    display:none;
  }
  .sidenav-mobile{
    display:block;
  }
}
@media screen and (min-width: 769px) {
  .sidenav-images{
    display:block;
  }
  .sidenav-desktop{
    display:block;
  }
  .sidenav-mobile{
    display:none;
  }
}

</style>