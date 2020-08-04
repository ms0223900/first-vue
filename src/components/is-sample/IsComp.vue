<template>
  <div>
    <h2>{{ "Is Component" }}</h2>
    <button
      v-for="(tab, index) in tabListData"
      :key="index"
      :class="['tab-btn', { active: tab === compNow }]"
      @click="handleSetCompNow(tab)"
    >
      {{ tab }}
    </button>
    <component :is="compNow"></component>
  </div>
</template>

<script>
import Vue from 'vue/dist/vue.esm';

const tabListData = [
  'TabA', 'TabB', 'TabC',
];

const TabA = Vue.component('TabA', {
  template: '<div>This is Tab A</div>',
});
const TabB = Vue.component('TabB', {
  template: '<div>This is Tab B</div>',
});
const TabC = Vue.component('TabC', {
  template: '<div>This is Tab C</div>',
});

export default {
  data() {
    return ({
      tabListData,
      compNow: undefined,
    });
  },
  computed: {
    isSelected(comp) {
      return this.compNow === comp;
    },
  },
  methods: {
    handleSetCompNow(comp) {
      this.compNow = comp;
    },
  },
  components: {
    TabA, TabB, TabC,
  },
};
</script>
<style scoped>
.tab-btn {
  padding: 10px;
}
.tab-btn.active {
  background-color: #ddd;
}
</style>
