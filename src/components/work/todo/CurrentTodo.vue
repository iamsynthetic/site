<template>
    <div id="current-todos" class="container">
        <h3 class="text-right" v-if="todos.length > 0">{{todos.length}} items</h3>
        <ul class="list-group">
            <div v-model="todos">
                <draggable :options="{handle: '.dragger'}">
                    <li class="list-group-item dragger" v-for="todo in todos" @mouseover.self="mouseoverListitem" @mouseout.self="mouseoutListitem">
                        <div class="row">
                            <div class="col-8 item-title">{{todo.body}}</div>
                            <div class="col-4 btn-group">
                                <button id="btn1" class="btn btn-default btn-sm" @mouseover="mouseoverButton" @mouseout="mouseoutButton" @click="edit(todo)"><icon id="icon1" class="icon1" name="edit"></icon></button>
                                <button id="btn2" class="btn btn-default btn-sm ml-1 mr-1" @mouseover="mouseoverButton" @mouseout="mouseoutButton" @click="complete(todo)"><icon id="icon2" class="icon2" name="check"></icon></button>
                                <button id="btn3" class="btn btn-default btn-sm ml-1 mr-1" @mouseover="mouseoverButton" @mouseout="mouseoutButton" @click="remove(todo)"><icon id="icon3" class="icon3" name="trash-alt"></icon></button>
                            </div>
                        </div>
                    </li>
                </draggable>
            </div>
        </ul>
    </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
    data(){
      return {
        red: '#ff5063',
        black: '#000000',
        graylighter:'#ededed',
        white: '#ffffff',
        btn1: "#btn1",
        btn2: "#btn2",
        btn3: "#btn3",
      }
    },
    methods: {
        edit(todo){
            this.$store.dispatch('editTodo', todo)
            this.$store.state.enableAddTodoModal = true
        },
        complete(todo){
            this.$store.dispatch('completeTodo', todo)
        },
        remove(todo){
            this.$store.dispatch('removeTodo', todo)
        },
        mouseoverListitem(e){
            TweenMax.to(e.target, .2, {boxShadow: "0px 2px 7px -1px rgba(0,0,0,0.50)"});
        },
        mouseoutListitem(e){
            TweenMax.to(e.target, .2, {boxShadow: "0px 0px 0px 0px"});
        },
        mouseoverButton(e){
            //e.target.id doesn't seem to work with icons above, have to
            //explicitly say "this id" when animating.
            console.log(e.target)
            switch(e.target.id){
                case "btn1":
                    TweenMax.to(btn1, .2, {color:this.red, ease:Power2.easeIn});
                    break
                case "icon1":
                    TweenMax.to("#icon1", .2, {color:this.red, ease:Power2.easeIn});
                break
                case "btn2":
                    TweenMax.to(btn2, .2, {color:this.red, ease:Power2.easeIn});
                break
                case "icon2":
                    TweenMax.to("#icon2", .2, {color:this.red, ease:Power2.easeIn});
                break
                case "btn3":
                    TweenMax.to(btn3, .2, {color:this.red, ease:Power2.easeIn});
                break
                case "icon3":
                    TweenMax.to("#icon3", .2, {color:this.red, ease:Power2.easeIn});
                break
            }
        },
        mouseoutButton(e){
            //to get the desired mouseout effect, need to add the animation for both
            //icon and button inside the button mouseout
            console.log(e.target)
            switch(e.target.id){
                case "btn1":
                    TweenMax.to(btn1, .2, {color:this.graylighter, ease:Power2.easeOut});
                    TweenMax.to("#icon1", .2, {color:this.graylighter, ease:Power2.easeOut});
               break
                case "btn2":
                    TweenMax.to(btn2, .2, {color:this.graylighter, ease:Power2.easeOut});
                    TweenMax.to("#icon2", .2, {color:this.graylighter, ease:Power2.easeOut});
                break;
                case "btn3":
                    TweenMax.to(btn3, .2, {color:this.graylighter, ease:Power2.easeOut});
                    TweenMax.to("#icon3", .2, {color:this.graylighter, ease:Power2.easeOut});
                break
            }
        }
    },
    computed: {
        todos(){
            return this.$store.getters.todos
        }
    },
    components: {
        draggable
    }
}
</script>

<style lang="scss" scoped>

    @import '../../../styles/custom-bootstrap.scss';
    @import '../../../../node_modules/bootstrap/scss/bootstrap.scss';

    .container {
        background-color:$todo-charcoal;
    }
    .item-title {
        padding-left:14px;
    }
    .btn-group{
        float: right;
    }

    .dragger{
        cursor: pointer;
    }
    .btn {
        //background-color: blue; /* Blue background */
        border: none; /* Remove borders */
        color: $gray-light; /* White text */
        //padding:4px 8px 2px 8px;
        //padding: 4px 8px; /* Some padding */
        font-size: 16px; /* Set a font size */
        cursor: pointer; /* Mouse pointer on hover */
    }
    // .btn:hover {
    //     background-color: RoyalBlue;
    // }
    .fa-icon {
        width: auto;
        height: 1.2rem; /* or any other relative font sizes */
        
        //line-height:20px;
        //background-color:blue;
        /* You would have to include the following two lines to make this work in Safari */
        max-width: 100%;
        max-height: 100%;
    }
</style>
