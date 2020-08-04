<template>
  <div>
    <DomRefComp
      ref="customComp"
    />
    <div style="padding: 10px;"></div>
    <button @click="getCustomCompRef">
      {{ "click to see custom component ref" }}
    </button>
  </div>
</template>

<script>
import DomRefComp from './DomRefComp.vue';

export default {
  methods: {
    getCustomCompRef() {
      console.log(this.$refs.customComp.$data);
    },
  },
  components: {
    DomRefComp,
  },
};
</script>
