<template>
  <router-link :to="linkTo">
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
    linkTo() {
      return ({
        name: this.linkToName,
        params: this.params,
      });
    },
  },
  props: {
    btnText: String,
    linkToName: String,
    params: Object,
  },
  mounted() {
    // console.log(this.params);
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
