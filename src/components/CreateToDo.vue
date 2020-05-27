<template>
  <div :class="$style.createToDo">
    <h2 :class="$style.title">Create a new task</h2>
    <form @submit.prevent="addTodo">
      <input type="text" v-model="title" :class="$style.inputTitle" placeholder="Enter a title">
      <textarea v-model="description" :class="$style.inputDescription" cols="30" rows="10" placeholder="What do you have to do ?" />
      <button class="inputSubmit" type="submit">NEW TASK</button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'createToDo',
  data() {
    return {
      content: {},
      title: '',
      description: ''
    }
  },
  methods: {
    addTodo() {
      const { title, description } = this
      this.$emit('addTodo', {title, description, isDone: false })
    }
  }
}

</script>

<style lang="scss" module>

  .createToDo {
    width: calc(100% - 30px);
    border: 2px solid rgb(130, 161, 16);
    padding: 15px;
    box-shadow: 3px 5px 11px -2px rgba(0, 0, 0, 0.65);
    border-radius: 5px;
    margin-bottom: 20px;
    @include tablet {
      border: none;
      box-shadow: none;
      width: 500px;
      margin: 0 auto 50px;
    }
  }

  .title {
    font-size: 18px;
    text-align: center;
    font-family: 'RobotoRegular';
    margin-bottom: 20px;
    color: rgb(130, 161, 16);
    text-transform: uppercase;
  }

  .inputTitle {
    width: calc(100% - 17px);
    height: 30px;
    border: 2px solid rgb(130, 161, 16);
    border-radius: 3px;
    transition: .2s;
    padding-left: 10px;
    margin-bottom: 10px;
    font-family: 'RobotoRegular';
    font-size: 16px;

    &:focus {
      outline: none;
      border-width: 3px;
      box-shadow: 4px 4px 13px -6px rgba(0,0,0,0.74);
    }

    &::placeholder {
      text-transform: uppercase;
    font-size: 14px;
    }
  }

  .inputDescription {
    width: calc(100% - 25px);
    height: 80px;
    border: 2px solid rgb(130, 161, 16);
    border-radius: 3px;
    transition: .2s;
    padding: 10px 10px 0;
    margin-bottom: 10px;
    font-family: 'RobotoRegular';
    font-size: 16px;
    resize: none;

    &:focus {
      outline: none;
      border-width: 3px;
      box-shadow: 4px 4px 13px -6px rgba(0,0,0,0.74);
    }

    &::placeholder {
      text-transform: uppercase;
      font-size: 14px;
    }
  }
  
</style>