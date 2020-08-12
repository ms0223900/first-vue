<template>
  <div>
    Parent Here.
    <ChildComp />
  </div>
</template>

<script>
import Vue from 'vue/dist/vue.esm';

const ChildComp = Vue.component('ChildComp', {
  data() {
    return ({
      message: 'msg from child.',
    });
  },
  mounted() {
    console.log(this.$parent);
    console.log(this.$parent.$data.message);
  },
  template: `
    <div>Child Here</div>
  `,
});

export default {
  data() {
    return ({
      message: 'msg from parent.',
    });
  },
  mounted() {
    console.log(this.$children);
    console.log(this.$children[0].$data.message);
  },
  components: {
    ChildComp,
  },
};
</script>
