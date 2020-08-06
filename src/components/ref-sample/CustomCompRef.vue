<template>
  <div>
    <DomRefComp
      ref="customComp"
    />
    <div style="padding: 10px;"></div>
    <div>
      {{ `component data: ${jsonedCustomCompData}` }}
    </div>
    <button @click="getCustomCompRef">
      {{ "click to see custom component ref" }}
    </button>
  </div>
</template>

<script>
import DomRefComp from './DomRefComp.vue';

export default {
  computed: {
    jsonedCustomCompData() {
      return JSON.stringify(this.customCompData);
    },
  },
  data() {
    return ({
      customCompData: undefined,
    });
  },
  methods: {
    getCustomCompRef() {
      const customCompData = this.$refs.customComp.$data;
      this.customCompData = customCompData;
    },
  },
  components: {
    DomRefComp,
  },
};
</script>
