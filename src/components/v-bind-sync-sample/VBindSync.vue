<template>
  <div>
    <h2>Test V-bind.sync Sample</h2>
    <TextPopup :title.sync="title" />
  </div>
</template>

<script>
import Vue from 'vue/dist/vue.esm';

const TextPopup = Vue.component('TextPopup', {
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
  template: `
    <div>
      <h3>{{ title }}</h3>
      <p>{{ "input value in children: " + inputVal }}</p>
      <input v-model="inputVal" />
      <button @click="handleChangeTitle">Change Parent data.title</button>
    </div>
  `,
});

export default {
  name: 'VBindSync',
  data() {
    return ({
      title: '',
    });
  },
  components: {
    TextPopup,
  },
};
</script>
