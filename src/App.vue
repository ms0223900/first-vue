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
    <PreSample />
    <hr />
    <h4>Ref</h4>
    <CustomCompRef />
    <hr />
    <h4>Is</h4>
    <IsComp />
    <hr />
    <h4>Transition</h4>
    <TransitionComp />
    <TransitionGroupComp />
    <hr />
    <h4>Keep Alive</h4>
    <KeepAliveComp />
  </div>
</template>

<script>
import { todoList } from './static/todo-mocks.ts';
import TodoItem from './components/TodoItem.vue';
import SimpleForm from './components/SimpleForm.vue';
import PreSample from './components/PreSample.vue';
import CustomCompRef from './components/ref-sample/CustomCompRef.vue';
import IsComp from './components/is-sample/IsComp.vue';
import TransitionComp from './components/transition/TransitionComp.vue';
import TransitionGroupComp from './components/transition/TransitionGroupComp.vue';
import KeepAliveComp from './components/keep-alive-sample/KeepAliveComp.vue';

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
    PreSample,
    CustomCompRef,
    IsComp,
    TransitionComp,
    TransitionGroupComp,
    KeepAliveComp,
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
