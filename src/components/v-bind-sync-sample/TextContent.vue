<template>
  <div>
    <h3>{{ "Title from parent: " + title }}</h3>
    <p>{{ "input value in children: " + inputVal }}</p>
    <input v-model="inputVal" />
    <button @click="handleChangeTitle">Change Parent data.title</button>
  </div>
</template>

<script>
export default {
  name: 'TextContent',
  props: {
    title: String,
  },
  data() {
    return ({
      inputVal: '',
    });
  },
  methods: {
    handleChangeTitle() {
      this.$emit('update:title', this.inputVal);
    },
  },
  watch: {
    inputVal() {
      this.handleChangeTitle();
      // console.log(this.inputVal);
    },
  },
};
</script>
