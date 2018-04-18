<template>
    <div id="todo" class="todo-container">
        <get-todo class="get-todo" v-show="$store.state.enableAddTodoModal">get</get-todo>
        <div class="header">
            <h1>ALL TASKS</h1>
            <div class="container">
                <div class="row h-100">
                    <div class="col-4 colbg">
                        <h3 v-if="totalTodos.length > 0">
                            <span class="completed-todos-finished">{{completedTodos.length}}</span> <span class="completed-todos-total">/ {{totalTodos.length}}</span>
                        </h3>
                        <h3 v-else>
                            no more todos!
                        </h3>
                    </div>
                    <div class="col-sm colbg2">
                       two
                    </div>
                </div>
            </div>
        </div>
        <completed-todos class="completed-todo">completed</completed-todos>
        <button id="show-modal" @click="$store.state.enableAddTodoModal = true">make todo</button>
        <current-todos class="current-todo">current</current-todos>
    </div>
</template>

<script>
import GetTodo from './GetTodo.vue'
import CurrentTodo from './CurrentTodo.vue'
import CompletedTodos from './CompletedTodos.vue'

export default {
    data(){
        return {
            isGetTodoVisible: false
        }
    },
    computed: {
        totalTodos(){
            return this.$store.getters.totalTodos
        },
        completedTodos(){
            return this.$store.getters.completedTodos
        }
    },
    watch:{
        
    },
    components: {
        'GetTodo': GetTodo,
        'CompletedTodos': CompletedTodos,
        'CurrentTodos': CurrentTodo
    }
}
</script>

<style lang="scss" scoped>
    @import '../../../styles/custom-bootstrap.scss';
    @import '../../../../node_modules/bootstrap/scss/bootstrap.scss';

    .todo-container{
        width:375px;
        height:667px;
        margin: auto;
        background-color:$todo-charcoal;
    }

    .header{
        height:140px;
        //background-color:$todo-charcoal;
    }

    .header h1 {
        width:100%;
        height:50px;
        margin:auto;
        background-color:$todo-charcoal;
        color: $todo-light-cream;
        text-align:center;
        padding-top:12px;
        font-family: "Roboto", Sans-Serif;
        font-size:24px;
    }

    .container {
        height:90px;
    }
    .completed-todos-finished{
        color: $todo-light-cream;
        font-family: "Roboto", Sans-serif;
        font-size: 30px;
    }
    .completed-todos-total{
        color: $todo-light-charcoal;
        font-family: "Roboto", Sans-serif;
        font-size: 16px;
    }
    .colbg{
        margin:auto;
        text-align:center;
        background-color:$purple;
    }
    .colbg2{
        margin:auto;
        text-align:center;
        background-color:$orange;
    }

</style>
