<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
/* eslint-disable no-bitwise */
import Vue from 'vue';

const contextStore = Vue.observable({
  value: 'Value from provide.context',
  valueFromData: 'hi',
});

export default {
  name: 'ContextProvider',
  data() {
    return ({
      state: contextStore,
    });
  },
  methods: {
    handleChangeValueRandomly() {
      // console.log('called');
      this.state.valueFromData = ~~(Math.random() * 100);
    },
  },
  provide() {
    return ({
      context: {
        state: this.$data.state,
        dispatch: {
          handleChangeContext: this.handleChangeValueRandomly,
        },
      },
    });
  },
};
</script>
