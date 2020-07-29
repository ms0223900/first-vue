<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <TodoItem
      v-for="singleTodoData in todoList"
      :key="singleTodoData.id"
      :todo='singleTodoData'
      :onCheck='handleCheck'
    />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import TodoItem from './components/TodoItem.vue';
import { todoList } from './static/todo-mocks.ts';

export default {
  name: 'App',
  data() {
    return {
      todoList,
    };
  },
  methods: {
    handleCheck(id) {
      const matchedIndex = this.todoList.findIndex((t) => t.id === id);
      if (matchedIndex !== -1) {
        this.todoList[matchedIndex] = {
          ...this.todoList[matchedIndex],
          checked: !this.todoList[matchedIndex].checked,
        };
      }
      console.log(this.todoList, id);
    },
  },
  components: {
    HelloWorld,
    TodoItem,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
