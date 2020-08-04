<template>
  <div>
    <transition name="fade" mode="in-out">
      <div v-if="num === 1">01</div>
      <div v-if="num === 2">02</div>
      <div v-if="num === 3">03</div>
    </transition>
    <button @click="handleAddNum">Add Num</button>
  </div>
</template>

<script>
export default {
  name: 'TransitionComp',
  data() {
    return ({
      num: 0,
    });
  },
  methods: {
    handleAddNum() {
      this.num = this.num + 1 > 3 ? 0 : this.num + 1;
    },
  },
};
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
