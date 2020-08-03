<template>
  <div id="app">
    <TodoItem
      v-for="singleTodoData in todoList"
      :key="singleTodoData.id"
      :todo='singleTodoData'
      :clicked="clicked"
      :onAddClick="handleAddClick"
      :onCheck='handleCheck'
    />
    <SimpleForm />
  </div>
</template>

<script>
import { todoList } from './static/todo-mocks.ts';
import TodoItem from './components/TodoItem.vue';
import SimpleForm from './components/SimpleForm.vue';

export default {
  name: 'App',
  data() {
    return {
      todoList,
      clicked: 0,
    };
  },
  methods: {
    handleCheck(id) {
      console.log(id);
      return () => {
        // console.log(id, e.target);
        const matchedIndex = this.todoList.findIndex((t) => t.id === id);
        if (matchedIndex !== -1) {
          this.todoList[matchedIndex] = {
            ...this.todoList[matchedIndex],
            checked: !this.todoList[matchedIndex].checked,
          };
        }
        console.log(this.todoList, id);
      };
    },
    handleAddClick() {
      // window.alert('add');
      this.clicked += 1;
    },
  },
  extends: {
    // SimpleForm,
  },
  components: {
    TodoItem,
    SimpleForm,
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
