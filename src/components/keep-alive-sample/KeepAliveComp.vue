<template>
  <div class="wrapper">
    <button @click="handleToggleComp">
      Toggle Components
    </button>
    <hr />
    <span>Keep Alive(no rerender, data reserved)</span>
    <keep-alive>
      <component :is="compNow" />
    </keep-alive>
    <hr />
    <span>No Keep Alive(rerendered, data disapear)</span>
    <template>
      <component :is="compNow" />
    </template>
  </div>
</template>

<script>
import Vue from 'vue/dist/vue.esm';

const commonCompTemplate = (comp) => `
  <div>
    <div>This is Com ${comp}</div>
    <button @click="handleAdd">{{ "clicked: " + clicked }}</button>
  </div>
`;

const compMixin = {
  data() {
    return ({
      clicked: 0,
    });
  },
  methods: {
    handleAdd() {
      this.clicked += 1;
    },
  },
};

const CompA = Vue.component('CompA', {
  mixins: [
    compMixin,
  ],
  template: commonCompTemplate('A'),
});
const CompB = Vue.component('CompB', {
  mixins: [
    compMixin,
  ],
  template: commonCompTemplate('B'),
});

export default {
  name: 'KeepAliveComp',
  data() {
    return ({
      compNow: 'CompA',
    });
  },
  methods: {
    handleToggleComp() {
      const newCompNow = this.compNow === 'CompA' ? 'CompB' : 'CompA';
      this.compNow = newCompNow;
    },
  },
  components: {
    CompA, CompB,
  },
};
</script>

<style scoped>
.wrapper {
  max-width: 300px;
  margin: auto;
}
</style>
