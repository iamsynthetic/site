<template>
    <div id="get-todo" class="container">
        <!-- <input class="form-control"
               :value="newTodo"
               @change="getTodo"
               placeholder="I need to...">
        <button class="btn btn-primary" @click="addTodo">Add Todo</button> -->
        <div class="modal-container">
            <input type="text" class="form-control" :value="newTodo" @change="getTodo" placeholder="I need to...">
            <button class="btn btn-primary" @click="addTodo">Add Todo</button>
        </div>
    </div>
</template>

<script>
export default {
  methods:{
      getTodo(e){
          this.$store.dispatch('getTodo', e.target.value)
      },
      addTodo(){
          this.$store.dispatch('addTodo')
          this.$store.dispatch('clearTodo')
          this.$store.state.enableAddTodoModal = false
      }
  },
  computed:{
      newTodo(){
          return this.$store.getters.newTodo
      }
  }
}
</script>

<style lang="scss" scoped>

    .container{
        position: fixed;
        z-index: 9998;
        width: 375px;
        height: 667px;
        margin: auto;
        background-color: rgba(0, 0, 0, .5);
        transition: opacity .3s ease;
    }

    .modal-container {
        width: 300px;
        margin: 40px auto 0;
        padding: 20px 30px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }


</style>
