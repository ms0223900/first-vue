<template>
  <div>
    <label >
      <input type='checkbox' v-bind:checked='todo.checked' @click="onCheck(todo.id)" />
      <span>{{ todo.content }}</span>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      id: String || Number,
      content: String,
      checked: Boolean,
    },
    onCheck: Function,
  },
  mounted() {
    console.log(this.todo);
  },
};
</script>
