<template>
  <div :class="$style.toDoList" class="grid">
    <h1>TO DO LIST</h1>
    <CreateToDo @addTodo="todos.push($event)" />
    <div :class="$style.todosContainer">
      <ToDo v-for="(todo, index) in todos" :key="index" :content="todo" @getDeleted="deleteToDo(index)" @updateState="updateLocalStorage(index)" />
    </div>
  </div>
</template>

<script>
import CreateToDo from '@/components/CreateToDo.vue'
import ToDo from '@/components/ToDo.vue'

export default {
  name: 'ToDoList',
  components: {
    CreateToDo,
    ToDo
  },
  data() {
    return {
      todos: []
    }
  },
  created() {
    let localTodos = JSON.parse(localStorage.getItem('todos'))
    if ( localTodos ) {
      this.todos = localTodos
    }
  },
  updated() {
    localStorage.setItem('todos', JSON.stringify(this.todos))
  },
  methods: {
    deleteToDo(index) {
      this.todos.splice(index, 1)
    },
    updateLocalStorage(index) {
      let localTodos = JSON.parse(localStorage.getItem('todos'))
      localTodos[index].isDone = localTodos[index].isDone ? false : true
      localStorage.setItem('todos', JSON.stringify(localTodos))
    }
  }
}

</script>

<style lang="scss" module>

.toDoList {
  background-color: #fafafa;
}

.todosContainer {
  @include tablet {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}

</style>