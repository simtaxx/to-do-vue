<template>
  <div :class="$style.toDoList" class="grid">
    <h1>TO DO LIST</h1>
    <CreateToDo @addTodo="createToDo" />
    <div :class="$style.todosContainer">
      <ToDo v-for="(todo, index) in todos" :key="index" :index="index" :content="todo" @isDone="isDone" @deleteTodo="deleteTodo"/>
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
      todos: [],
      newIndex: null
    }
  },
  created() {
    let localTodos = JSON.parse(localStorage.getItem('todos'))
    if ( localTodos ) {
      this.todos = localTodos
    }
  },
  methods: {
    createToDo(event) {
      this.todos.push(event)
      localStorage.setItem('todos', JSON.stringify(this.todos))
    },
    isDone(currentTodo) {
      this.todos = this.todos.filter(todo => {
        if (todo.id === currentTodo.id) {
          return currentTodo
        } else return todo
      })
      localStorage.setItem('todos', JSON.stringify(this.todos))
    },
    deleteTodo(currentTodo) {
      this.todos = this.todos.filter(todo => todo.id !== currentTodo.id)
      localStorage.setItem('todos', JSON.stringify(this.todos))
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