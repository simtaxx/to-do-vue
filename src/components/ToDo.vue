<template>
  <div :class="this.content.isDone ? this.$style.isDone + ' ' + this.$style.toDo : this.$style.toDo">
    <h3 :class="$style.title">{{ content.title }}</h3>
    <p :class="$style.description">{{ content.description }}</p>
    <form v-if="isActive" @submit.prevent="rewriteTodo">
      <input :class="$style.inputText" v-model="content.title" type="text">
      <input :class="$style.inputText" v-model="content.description" type="text">
      <button class="inputSubmit">UPDATE</button>
    </form>
    <button v-if="!isActive" class="inputSubmit" @click="isDone">{{ content.isDone ? '✔ DONE' : '✘ NOT DONE' }}</button>
    <span :class="$style.close" @click="deleteTodo">❌</span>
    <span :class="$style.rewrite" @click="isActive ? isActive = false : isActive = true">✏️</span>
  </div>
</template>

<script>

export default {
  name: 'ToDo',
  props: {
    content: { type: Object, required: true }
  },
  data() {
    return {
      isActive: false
    }
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
    },
    rewriteTodo(e) {
      const { content } = this
      this.$emit('rewriteTodo', content)
      this.isActive = false
    }
  }
}

</script>

<style lang="scss" module>

  .toDo {
    position: relative;
    width: calc(100% - 30px);
    height: 100%;
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

.close {
  opacity: .4;
  position: absolute;
  top: 10px;
  right: 14px;
  cursor: pointer;
  transition: .2s;

  &:hover {
    opacity: 1;
  }
}

.rewrite {
  opacity: .4;
  position: absolute;
  top: 10px;
  left: 14px;
  cursor: pointer;
  transition: .2s;

  &:hover {
    opacity: 1;
  }
}

.inputText {
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

</style>