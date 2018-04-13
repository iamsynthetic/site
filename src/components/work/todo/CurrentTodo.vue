<template>
    <div id="current-todos" class="container">
        <h3 class="text-right" v-if="todos.length > 0">{{todos.length}} items</h3>
        <ul class="list-group">
            <div v-model="todos">
                <draggable :options="{handle: '.dragger'}">
                    <li class="list-group-item dragger" v-for="todo in todos" @mouseover.self="mouseoverListitem" @mouseout.self="mouseoutListitem">
                        {{todo.body}}
                        <div class="btn-group">
                            <button class="button-icon-1 btn btn-default btn-sm" @mouseover="mouseoverButton" @mouseout="mouseoutButton" @click="edit(todo)">
                                <icon class="test" name="edit"></icon>
                            </button>
                            <button class="button-icon-2 btn btn-default btn-sm" @mouseover.native="mouseoverButton" @mouseout.native="mouseoutButton" @click="complete(todo)">
                                <icon name="check"></icon>
                            </button>
                            <button class="button-icon-3 btn btn-default btn-sm" @mouseover.native="mouseoverButton" @mouseout.native="mouseoutButton" @click="remove(todo)">
                                <icon name="trash-alt"></icon>
                            </button>
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
        lightgrey:'#f4fafa',
        white: '#ffffff'
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
            console.log('mouseover button')
            TweenMax.to(e.target, .2, {color:this.white, ease:Power2.easeIn});
            TweenMax.to(".test", .2, {color:this.white, ease:Power2.easeIn});
        },
        mouseoutButton(e){
            TweenMax.to(e.target, .2, {color:this.black, ease:Power2.easeOut});
            TweenMax.to(".test", .2, {color:this.black, ease:Power2.easeOut});
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

    .btn-group{
        float: right;
    }

    .dragger{
        cursor: pointer;
    }
    .button-icon-1{
        width:100%;
        height:100%;
        color:red;
    }
    .button-icon-2{
        width:100%;
        height:100%;
        //background-color:red;
    }
    .button-icon-3{
        width:100%;
        height:100%;
        //background-color:red;
    }
    .fa-icon {
        width: auto;
        height: 1rem; /* or any other relative font sizes */
        line-height:20px;
        background-color:blue;
        /* You would have to include the following two lines to make this work in Safari */
        max-width: 100%;
        max-height: 100%;
    }
</style>
