<template>
  <div :class="isItDone">
    <h3 :class="$style.title">{{ content.title }}</h3>
    <p :class="$style.description">{{ content.description }}</p>
    <button class="inputSubmit" @click="isDone = isDone ? false : true">{{ buttonText }}</button>
  </div>
</template>

<script>

export default {
  name: 'createToDo',
  props: {
    content: { type: Object, required: true }
  },
  data() {
    return {
      isDone: this.content.isDone 
    }
  },
  computed: {
    isItDone() {
      return ( this.isDone ? this.$style.isDone + ' ' + this.$style.toDo : this.$style.toDo  )
    },
    buttonText() {
      return ( this.isDone ? '✔ DONE' : '✘ NOT DONE' )
    }
  }
}

</script>

<style lang="scss" module>

  .toDo {
    width: calc(100% - 30px);
    border: 2px solid rgb(130, 161, 16);
    padding: 15px;
    box-shadow: 3px 5px 11px -2px rgba(0, 0, 0, 0.65);
    border-radius: 5px;
    margin-bottom: 20px;
  }

  .isDone {
    background-color: rgb(130, 161, 16);

    .title {
      color: #fafafa;
    }

    .description {
      color: #fafafa;
    }

    button {
      border: 2px solid #fafafa;
      background-color: rgb(130, 161, 16);
      color: #fafafa;

      &:hover {
        color:rgb(130, 161, 16);
        background-color: #fafafa;
      }
    }
  }

  .title {
    font-size: 18px;
    text-align: center;
    font-family: 'RobotoBold';
    margin-bottom: 20px;
    color: rgb(130, 161, 16);
  }

  .description {
    font-size: 16px;
    font-family: 'RobotoRegular';
    margin-bottom: 20px;
    color: rgb(130, 161, 16);
  }

</style>