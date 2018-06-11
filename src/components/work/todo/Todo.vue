<template>
    <div id="todo" class="todo-container">
        <get-todo class="get-todo" v-show="$store.state.enableAddTodoModal">get</get-todo>
        <div class="header">
            <div class="container">
                <div class="all-tasks-group row h-100">
                    <div class="col-6">
                       <h1 class="all-tasks-title">ALL TASKS</h1>
                       <h5 class="todays-date">{{ new Date() | moment("dddd MMMM D") }}</h5>
                    </div>
                    <div class="col-6">
                        <img class="profile-img float-right" src="../../../images/profile_img2.jpg">
                        <!-- <h2 class="float-right">Michelle Brule</h2> -->
                    </div>
                </div>
                <div class="row h-50">
                    <div class="col-6">
                       <h3>
                            <!-- <span class="days-ago">3 DAYS AGO</span> -->
                            <!-- <span class="todays-date">{{ new Date() | moment("dddd MMMM D") }}</span> -->
                        </h3>
                    </div>
                    <div class="col-6">
                       <h3 class="float-right">
                            <span class="completed-todos-finished">{{completedTodos.length}}</span> <span class="completed-todos-total">/ {{totalTodos.length}}</span>
                        </h3>
                    </div>
                        <!-- <h3>
                            <span class="completed-todos-finished">3 DAYS AGO</span>
                        </h3>
                        <h3>
                            <span class="completed-todos-finished">{{completedTodos.length}}</span> <span class="completed-todos-total">/ {{totalTodos.length}}</span>
                        </h3> -->
                        <!-- <h3 v-if="totalTodos.length > 0">
                            <span class="completed-todos-finished">{{completedTodos.length}}</span> <span class="completed-todos-total">/ {{totalTodos.length}}</span>
                        </h3>
                        <h3 v-else>
                            100% complete
                        </h3> -->
                </div>
                <div class="row h-50">
                    <div class="col-12 mx-auto">
                        <div class="text-center">
                            <button id="show-modal" class="main-button" @click="$store.state.enableAddTodoModal = true">CREATE TODO</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <completed-todos class="completed-todo">completed</completed-todos> -->
        <!-- <button id="show-modal" class="main-button" @click="$store.state.enableAddTodoModal = true">CREATE TODO</button> -->
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
        background-color:$todo-dark-purple;
    }

    .header{
        height:200px;
        //background-color:$todo-charcoal;
    }

    .all-tasks-title {
        width:100%;
        //height:38px;
        margin:auto;
        background-color:$todo-dark-purple;
        color: $todo-grey;
        padding-top:8px;
        padding-bottom:3px;
        font-family: "Roboto", Sans-Serif;
        font-size:18px;
        letter-spacing:2px;
    }
    .container {
        height:90px;
    }
    .all-tasks-group{
        padding-top:14px;
    }
    .profile-img{
        border-radius:8px;
    }
    .todays-date{
        color: $todo-dark-grey;
        font-family: "Roboto", Sans-serif;
        font-size: 14px;
    }
    .completed-todos-finished{
        color: $todo-grey;
        font-family: "Roboto", Sans-serif;
        font-size: 24px;
    }
    .completed-todos-total{
        color: $todo-dark-grey;
        font-family: "Roboto", Sans-serif;
        font-size: 24px;
    }
    .main-button{
        background: $todo-blue;
        // background-image: -webkit-linear-gradient(top, #3498db, #2980b9);
        // background-image: -moz-linear-gradient(top, #3498db, #2980b9);
        // background-image: -ms-linear-gradient(top, #3498db, #2980b9);
        // background-image: -o-linear-gradient(top, #3498db, #2980b9);
        // background-image: linear-gradient(to bottom, #3498db, #2980b9);
        -webkit-border-radius: 20;
        -moz-border-radius: 20;
        border-radius: 20px;
        font-family: Arial;
        // color: #ffffff;
        font-size: 10px;
        padding: 8px 40px 8px 40px;
        text-decoration: none;
        border-style: none;
    }
    .main-button:hover {
        background: #3cb0fd;
        // background-image: -webkit-linear-gradient(top, #3cb0fd, #3498db);
        // background-image: -moz-linear-gradient(top, #3cb0fd, #3498db);
        // background-image: -ms-linear-gradient(top, #3cb0fd, #3498db);
        // background-image: -o-linear-gradient(top, #3cb0fd, #3498db);
        // background-image: linear-gradient(to bottom, #3cb0fd, #3498db);
        text-decoration: none;
    }
    .colbg{
        margin:auto;
        text-align:center;
        background-color:$todo-dark-purple;
    }
    .colbg2{
        margin:auto;
        text-align:center;
        background-color:$todo-dark-purple;
    }

</style>
