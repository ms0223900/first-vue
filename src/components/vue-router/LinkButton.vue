<template>
  <router-link :to="{ name: `${linkToName}`, }">
    <button :class="['btn', { active: active}]">
      <h4>{{ btnText }}</h4>
    </button>
  </router-link>
</template>

<script>
export default {
  name: 'LinkButton',
  computed: {
    active() {
      return this.$route.name === this.linkToName;
    },
  },
  props: {
    btnText: String,
    linkToName: String,
  },
};
</script>

<style scoped>
button {
  /* padding: 10px; */
  cursor: pointer;
  margin: 6px;
  border-radius: 3px;
}
.active {
  background-color: #111;
  color: #fff;
}
button:hover {
  background-color: #ddd;
}
</style>
