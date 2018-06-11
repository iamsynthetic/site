<template>
  <div id="work" class="work-container">
    <h1>WORK PAGE</h1>
    <div class="cta">
      <!-- <router-link @mouseover.native="mouseoverButton" @mouseout.native="mouseoutButton" class="text_btn" to="/">todo app</router-link>
      <router-link @mouseover.native="mouseoverButton" @mouseout.native="mouseoutButton" class="text_btn" to="/">project 2</router-link>
      <router-link @mouseover.native="mouseoverButton" @mouseout.native="mouseoutButton" class="text_btn" to="/">something else</router-link>
      <router-link @mouseover.native="mouseoverButton" @mouseout.native="mouseoutButton" class="text_btn" to="/">more stuff</router-link> -->

      <div id="slider" class="slider" @mousedown="startDrag" @mouseup="stopDrag" @mousemove="mouseMoving" @mouseLeave="stopDrag">
        <div class="slider-cards" :style="`transform: translate3d(${cardsX}px,0,0)`">
          <div class="slider-card" v-for="(slide, index) in slides" :class="randomClass(index)" @mouseover="sliderCardOver" @mouseout="sliderCardOut">
            <div class="square"></div>
            <div class="img-container" :id="slide.title" @mouseover.prevent>
              <img class="slider-card-img" :src="slide.image" :alt="slide.title" draggable="false" @mouseover.prevent/>
            </div>
            <div class="slider-info" :id="slide.title" @mouseover.prevent>
              <h1 @mouseover.prevent>{{slide.title}}</h1>
              <p @mouseover.prevent>{{slide.description}}</p>
              <button class="slider-button" @mouseover.prevent>Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <div class="test" ref="slidetestref">
        <div class="test2" ref="slidertest2ref">
          <div class="slider-test" ref="slidertestref3" v-for="(slide, index) in slides" :class="randomClass(index)">
            <button class="slider-button-test"><p>Learn More {{index}}</p></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Todo from './todo/Todo.vue'

export default {
  data(){
    return {
      red: '#ff5063',
      black: '#000000',
      basewhite: '#f5f5f5',
      grey: 'c5c5c5',

      slides: [
        {
          title: 'Daredevil',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum libero eget risus sodales cursus nec sed velit. Phasellus maximus luctus tellus id fermentum. Nulla facilisi.',
          image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/jxP4oHtcksDHHvWqMq9tW6TS7Lk.jpg'
        },
        {
          title: 'Jessica Jones',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum libero eget risus sodales cursus nec sed velit. Phasellus maximus luctus tellus id fermentum. Nulla facilisi.',
          image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/8a7e2GNpMnjI2hgRZH3jq2c7ffv.jpg'
        },
        {
          title: 'Luke Cage',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum libero eget risus sodales cursus nec sed velit. Phasellus maximus luctus tellus id fermentum. Nulla facilisi.',
          image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/9nWZZ1ghE0LuXEWJi7QjCymHygi.jpg'
        },
        {
          title: 'Iron Fist',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum libero eget risus sodales cursus nec sed velit. Phasellus maximus luctus tellus id fermentum. Nulla facilisi.',
          image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/nv4nLXbDhcISPP8C1mgaxKU50KO.jpg'
        },
        {
          title: 'The defenders',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum libero eget risus sodales cursus nec sed velit. Phasellus maximus luctus tellus id fermentum. Nulla facilisi.',
          image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/49XzINhH4LFsgz7cx6TOPcHUJUL.jpg'
        },
        {
          title: 'Arrow',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum libero eget risus sodales cursus nec sed velit. Phasellus maximus luctus tellus id fermentum. Nulla facilisi.',
          image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/mo0FP1GxOFZT4UDde7RFDz5APXF.jpg'
        },
        {
          title: 'The Flash',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum libero eget risus sodales cursus nec sed velit. Phasellus maximus luctus tellus id fermentum. Nulla facilisi.',
          image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/lUFK7ElGCk9kVEryDJHICeNdmd1.jpg'
        },
        {
          title: 'Gotham',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum libero eget risus sodales cursus nec sed velit. Phasellus maximus luctus tellus id fermentum. Nulla facilisi.',
          image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/5tSHzkJ1HBnyGdcpr6wSyw7jYnJ.jpg'
        },
        {
          title: 'Legends of Tomorrow',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum libero eget risus sodales cursus nec sed velit. Phasellus maximus luctus tellus id fermentum. Nulla facilisi.',
          image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/qEobyOhOTSse59ym0gIxsQgcRGZ.jpg'
        }
      ],
      selectedIndex: 0,
      dragging: false,
      initialMouseX: 0,
      initialCardsX: 0,
      cardsX: 0
    }
  },

  methods:{
    mouseoverButton(e){
        TweenMax.to(e.target, .2, {backgroundColor:this.red, color:this.basewhite, ease:Power2.easeIn});
      },
      mouseoutButton(e){
        TweenMax.to(e.target, .2, {backgroundColor:this.basewhite, color:this.black, ease:Power2.easeOut});
      },

      randomClass (key) {
        return 'style' + key;
    },

    sliderCardOver(e){
      console.log(e);
      console.log('e.path[1] is: ' + e.path[1]);
      console.log('e.path[1].classList[1] is: ' + e.path[1].classList[1]);
      console.log('e.path[1].attributes.class.nodeValue is: ' + e.path[1].attributes.class.nodeValue);
      var thaclass = '.' + e.path[1].classList[1];
      console.log(thaclass);
      var imgcont = thaclass + ' .img-container';
      console.log(imgcont);
      var slideinfo = thaclass + ' .slider-info';
      console.log(slideinfo);
      var thah1 = slideinfo + ' h1';
      console.log(thah1);
      var thap = slideinfo + ' p';
      console.log(thap);
      var classindex = thaclass.slice(-1);
      console.log('classindex is: ' + classindex);
      var dawidth = window.innerWidth || document.body.clientWidth;
      var daheight = window.innerHeight || document.body.clientHeight;
      var browserwidth = window.innerWidth;

      console.log('browserwidth is: ' + browserwidth);
      console.log('dawidth * classindex is: ' + dawidth * classindex);
      console.log('this.$refs.slidetestref is: ' + this.$refs.slidetestref);
      //console.log('slidetestref is: ' + slidetestref);

      TweenMax.to(imgcont, .7, {scaleX:1.05, scaleY:1.05, ease:Power3.easeInOut});
      TweenMax.to(thah1, .5, {y:'10px', ease:Power3.easeInOut});
      TweenMax.to(thap, .6, {y:'11px', ease:Quad.easeInOut});

      //TweenMax.to(this.$refs.slidetestref, .6, {x:0 - (100 * classindex), ease:Power3.easeInOut})
      //TweenMax.to(this.$refs.slidetestref, .6, {x:0 - (dawidth * classindex), ease:Power3.easeInOut})
      if(classindex == 0){
        console.log('classindex is 0');
        console.log(classindex);
        TweenMax.to(this.$refs.slidertestref3, .9, {x:0, ease:Expo.easeInOut})
      }
      else{
        console.log('classindex is: ' + classindex + 'which is more than 0');
        console.log('dawidth is: ' + dawidth);
        console.log('0 - (dawidth * classindex) is: ' + (0 - (dawidth * classindex)));
        TweenMax.to(this.$refs.slidertestref3, .9, {x:0 - (dawidth * classindex), ease:Expo.easeInOut})
      }
      //TweenMax.to(this.$refs.slidertestref3, .5, {x:0 - (dawidth), ease:Power3.easeInOut})
    },
    sliderCardOut(e){
      var thaclass = '.' + e.path[1].classList[1];
      var imgcont = thaclass + ' .img-container';
      var slideinfo = thaclass + ' .slider-info';
      var thah1 = slideinfo + ' h1';
      var thap = slideinfo + ' p';
      
      TweenMax.to(imgcont, .7, {scaleX:1, scaleY:1, ease:Power3.easeInOut});
      TweenMax.to(thah1, .4, {y:'0px', ease:Power3.easeInOut});
      TweenMax.to(thap, .5, {y:'0px', ease:Power3.easeInOut});
    },
    startDrag (e) {
      console.log('start drag')
      this.dragging = true;
      this.initialMouseX = e.pageX;
      this.initialCardsX = this.cardsX;
    },
    stopDrag (e) {
      this.dragging = false;
      const cardWidth = 290;
      const nearestSlide = -Math.round(this.cardsX / cardWidth);
      this.selectedIndex = Math.min(Math.max(0, nearestSlide), this.slides.length -1);
      TweenMax.to(this, 0.5, {cardsX: -this.selectedIndex * cardWidth, ease:Power2.easeOut});
      console.log('cardsX is: ' + this.cardsX);
      console.log('this.selectedIndex is: ' + this.selectedIndex);
    },
    mouseMoving (e) {
      console.log('mouseMoving')
      if(this.dragging) {
        const dragAmount = e.pageX - this.initialMouseX;
        const targetX = this.initialCardsX + dragAmount;
        this.cardsX = targetX;
      }
    }
    // startAnimating(){
    //   console.log('start animating');
    //   console.log('this.$refs.slidertestrf is: ' + this.$refs.slidertestref);
    //   TweenMax.to(this.$refs.slidertestref, 2, {width:'10%', ease:Quad.easeInOut, onComplete:done, onCompleteParams: [this.$refs.slidertestref]})

    //   console.log('this.$refs.slidertestrf is: ' + this.$refs.slidertestref);
    //   function done(thing){
    //     console.log('thing is: ' + thing);
    //     TweenMax.to(thing, 2, {width:'50%', ease:Quad.easeInOut, delay:1});
    //     console.log('done!')
    //   }
    //}
  },
  // mounted(){
  //   this.startAnimating();
  // },
  computed: {
    selectedSlide () {
      return this.slides[this.selectedIndex]
    }
  },
  components:{
    'Todo': Todo
  }
}
</script>

<style lang="scss" scoped>

  @import '../../styles/custom-bootstrap.scss';
  @import '../../../node_modules/bootstrap/scss/bootstrap.scss';

  .work-container {
    width: 100%;
    height:50%;
  }

  h1 {
  }

  .cta {
    width: 100%;
  }

  .cta a {
    text-decoration: none;
  }

  .cta a:hover,
  .cta a:active,
  .cta a.router-link-active {
    text-decoration:none;
  }

  .text_btn {
    border: none;
    color: $base_grey;
    font-family: "Roboto", Sans-Serif;
    font-size:48px;
    letter-spacing:3px;
    width:100%;
    display:block;
    cursor: pointer;
  }

  .square {
    width: 260px;
    height: 260px;
    position:absolute;
    z-index:2;
    cursor: pointer;
  }
//   .slider, .slider2 {
//   height: 400px;
//   width: 100%;
// }
  .slider2{
    height:400px;
    width:100%;
  }

  .slider {
    overflow: hidden;
    //position:absolute;
    height:400px;
    white-space: nowrap;
  }
  // .test {
  //   //overflow: hidden;
  //   position:absolute;
  //   //height:400px;
  //   width:100%;
  //   height:100%;
  //   top:0;
  //   left:0;
  //   display:block;
  //   background-color:red;
  //   //margin-top:-400px;
  //   white-space: nowrap;
  //   z-index:-12;
  // }
  .test {
    overflow:hidden;
    height:100%;
    white-space:nowrap;
    margin-top:-400px;
    opacity:.5;
    z-index:-12;
  }
  // .test2 {
  //   position: relative;
  //   display:block;
  //   margin-top:360px;
  //   margin-left:66px;
  //   width:260px;
  // }
  .test2{
    position:relative;
    height:400px;
    z-index:-11;
  }
  // .slider-test {
  //   display: inline-block;
  //   overflow: hidden;
  //   //width:100%;
  //   //margin-right:50px;
  //   width:100%;
  //   margin-right:20px;
  //   height:100%;
  //   z-index: -1;
  // }

  // .slider-test{
  //   display:inline-block;
  //   overflow:hidden;
  //   width:600px;
  //   height:400px;
  //   z-index:-1;
  // }

  .slider-test{
    display:inline-block;
    overflow:hidden;
    width:100%;
    height:400px;
    text-align:center;
    //padding-left:5px;
    //padding-right:5px;
    z-index:-1;
  }

  .slider-tests {
    position: relative;
    height:400px;  
    z-index: 1;
  }
  

  .slider-cards {
    position: relative;
    height:400px;
    z-index: 1;
  }

  .slider-card {
    display: inline-block;
    overflow: hidden;
    width: 260px;
    height: 260px;
    margin-right: 30px;
    margin-top:80px;
    z-index: -1;
  }
  .slider-card-bg {
    display: inline-block;
    overflow: hidden;
    width: 260px;
    height: 260px;
    margin-right: 30px;
    margin-top:80px;
    z-index: -1;
  }
  .img-container{
    width:260px;
    height:200px;
    overflow:hidden;
    z-index:1;
  }
  .slider-card img {
    width: 100%;
  }
  .slider-info {
    position: relative;
    width:100%;
  }

  .slider-info h1 {
    font-family: Arial Black, Gadget, sans-serif;
    margin-top:8px;
    line-height: 16px;
    font-size: 23px;
    text-align:center;
    //margin-top:20px;
  }
  .slider-info p {
    font-family: Arial, Helvetica, sans-serif;
    text-align:center;
  }

  .slider-button {
    position: absolute;
    width: 100%;
    height: 50px;
    bottom: 0;
    left: 0;
    top:140px;
    border: none;
    color: white;
    background-color: #E71284;
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
  }
  .slider-button-test {
    //position: absolute;
    width: 600px;
    height: 400px;
    margin:auto;
    top:0;
    bottom:0;
    left:0;
    right:0;
    border: none;
    color: white;
    background-color: #E71284;
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
  }
  .slider-button-test p {
    margin-top:340px;
  }
  .background-img-container{
    width:240px;
    height:400px;
    position:absolute;
    z-index:-10;
    opacity:.2;
  }
  .background-slide-img{
    width: 100%;
  }
</style>