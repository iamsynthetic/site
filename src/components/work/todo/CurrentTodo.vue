<template>
    <div id="current-todos" class="container">
        <h3 class="text-right" v-if="todos.length > 0">{{todos.length}} items</h3>
        <ul class="list-group">
            <div v-model="todos">
                <draggable :options="{handle: '.dragger'}">
                    <li class="list-group-item dragger" v-for="todo in todos">
                        {{todo.body}}
                        <div class="btn-group">
                            <button class="btn btn-default btn-sm" @mouseover="mouseoverButton" @mouseout="mouseoutButton" @click="edit(todo)">
                                <span class="glyphicon glyphicon-edit"></span> Edit
                            </button>
                            <button class="btn btn-default btn-sm" @click="complete(todo)">
                                <span class="glyphicon glyphicon-ok-circle"></span> Complete
                            </button>
                            <button class="btn btn-default btn-sm" type="button" @click="remove(todo)">
                                <span class="glyphicon glyphicon-ok-circle"></span> remove
                            </button>
                        </div>
                    </li>
                </draggable>
            </div>
        </ul>
    </div>
</template>

<script>
import draggable from 'vuedraggable';

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
            // this.$store.dispatch('addTodo')
            this.$store.dispatch('editTodo', todo)
            this.$store.state.enableAddTodoModal = true
        },
        complete(todo){
            this.$store.dispatch('completeTodo', todo)
        },
        remove(todo){
            this.$store.dispatch('removeTodo', todo)
        },
        mouseoverButton(e){
            //TweenMax.to(e.target, .2, {backgroundColor:this.black, color:this.white, ease:Power2.easeIn});
            TweenMax.to(e.target, .2, {boxShadow: "0px 2px 7px -1px rgba(0,0,0,0.50)"});
        },
        mouseoutButton(e){
            //TweenMax.to(e.target, .2, {backgroundColor:this.white, ease:Power2.easeOut});
            TweenMax.to(e.target, .2, {boxShadow: "0px 0px 0px 0px"});
            //TweenMax.set(e.target, {clearProps:"all"});
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
</style>
