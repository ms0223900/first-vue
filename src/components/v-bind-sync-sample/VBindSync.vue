<template>
  <div>
    <h2>Test V-bind.sync Sample</h2>
    <TextPopup :title.sync="content.title" />
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
      titleInChildren: this.title,
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
      <h3>{{ "Title from parent: " + title }}</h3>
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
      content: {
        title: '',
      },
    });
  },
  // methods: {
  //   update(val) {
  //     this.content.title = val;
  //   },
  // },
  components: {
    TextPopup,
  },
};
</script>
