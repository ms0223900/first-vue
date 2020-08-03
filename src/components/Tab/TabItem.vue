<template>
  <button :class="classList" @click="onChangeTab(index)">
    {{ tabText }}
  </button>
</template>

<script>
export default {
  name: 'TabItem',
  props: {
    index: Number,
    tabText: String,
    isActivated: Boolean,
    onChangeTab: Function,
  },
  computed: {
    classList() {
      return ({
        activated: this.isActivated,
      });
    },
  },
};
</script>

<style scoped>
button {
  padding: 10px;
  background-color: #eee;
}
button.activated {
  background-color: #333;
  color: #fff;
}
</style>
