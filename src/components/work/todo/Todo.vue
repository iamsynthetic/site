<template>
    <div id="todo" class="todo-container">
        <get-todo class="get-todo" v-show="isGetTodoVisible" @close="isGetTodoVisible=false">get</get-todo>
        <div class="header">
            <h1>todo app</h1>
            <div class="container">
                <div class="row h-100">
                    <div class="col-4 colbg">
                        <h3 v-if="totalTodos.length > 0">
                            {{completedTodos.length}} / {{totalTodos.length}}
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
        <button id="show-modal" @click="isGetTodoVisible = !isGetTodoVisible">make todo</button>
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
        background-color:$white;
    }

    .header{
        height:140px;
        background-color:$gray-light;
    }

    .header h1 {
        width:100%;
        height:50px;
        margin:auto;
        background-color:aqua;
        text-align:center;
        padding-top:5px;
    }

    .container {
        height:90px;
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
