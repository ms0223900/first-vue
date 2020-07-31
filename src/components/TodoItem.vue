<template>
  <div>
    <label>
      <input
        :id='todo.id'
        type='checkbox'
        :checked='todo.checked'
        v-model="todo.checked"
         @click="onAddClick"
        />
      <span>{{ todo.content }}</span>
      <span>{{ "clicked: " + clicked }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    todo: {
      type: String,
      id: String || Number,
      content: String,
      checked: Boolean,
    },
    clicked: Number,
    onAddClick: Function,
    onCheck: Function,
  },
  watch: {
    'todo.checked': {
      handler(next, prev) {
        console.log(next, prev);
        // if (prev.checked !== next.checked) {
        //   console.log('checked!');
        // }
        console.log(this.todo);
      },
      immediate: true,
      // deep: true,
    },
  },
  mounted() {
    // console.log(this.todo);
  },
  render() {
    return (
      <div></div>
    );
  },
};
</script>
