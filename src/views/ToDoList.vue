<template>
  <div :class="$style.toDoList" class="grid">
    <h1>TO DO LIST</h1>
    <CreateToDo @addTodo="todos.push($event)" />
    <div v-for="todo in todos" :key="todo.id">
      <ToDo :content="todo" />
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
  }
}

</script>

<style lang="scss" module>

.toDoList {
  background-color: #fafafa;
}

</style>