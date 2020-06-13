<template>
  <div :class="this.content.isDone ? this.$style.isDone + ' ' + this.$style.toDo : this.$style.toDo">
    <h3 :class="$style.title">{{ content.title }}</h3>
    <p :class="$style.description">{{ content.description }}</p>
    <button class="inputSubmit" @click="isDone">{{ content.isDone ? '✔ DONE' : '✘ NOT DONE' }}</button>
    <span :class="$style.close" @click="deleteTodo">❌</span>
  </div>
</template>

<script>

export default {
  name: 'ToDo',
  props: {
    content: { type: Object, required: true }
  },
  created() {
    this.content.id = this._uid
  },
  methods: {
    isDone() {
      this.content.isDone  ? this.content.isDone  = false : this.content.isDone = true
      const { content } = this
      this.$emit('isDone', content)
    },
    deleteTodo() {
      const { content } = this
      this.$emit('deleteTodo', content)
    }
  }
}

</script>

<style lang="scss" module>

  .toDo {
  position: relative;
    width: calc(100% - 30px);
    border: 2px solid rgb(130, 161, 16);
    padding: 15px;
    box-shadow: 3px 5px 11px -2px rgba(0, 0, 0, 0.65);
    border-radius: 5px;
    margin-bottom: 20px;
    @include tablet {
      width: 300px;
      margin-right: 10px;
    }
    @include desktop {
      width: calc(100% / 3 - 50px)
    }
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
  
  .inputDelete {
  width: 100%;
  border: 2px solid rgb(152, 41, 33);
  background-color: rgb(152, 41, 33);
  border-radius: 3px;
  font-family: 'RobotoBold';
  font-size: 16px;
  color:#fafafa;
  cursor: pointer;
  transition: .2s;
  @include desktop {
    height: 40px;
  }

  &:focus {
    outline: none;
  }

  &:hover {
    color: rgb(152, 41, 33);
    background-color: #fafafa;
  }
}

.close {
  opacity: .4;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  transition: .2s;

  &:hover {
    opacity: 1;
  }
}

</style>