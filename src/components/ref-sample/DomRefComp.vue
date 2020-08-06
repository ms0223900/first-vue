<template>
  <div>
  <h1 ref="title">
    {{ "hi" }}
  </h1>
  <span>{{ `width: ${compWidth}px`  }}</span>
  <button @click="getRef">
    {{ "click to see component width by get ref." }}
  </button>
  </div>
</template>

<script>
export default {
  data() {
    return ({
      clicked: 0,
      compWidth: 0,
    });
  },
  methods: {
    getRef() {
      const ref = this.$refs.title;
      const compWidth = ref.clientWidth;
      this.compWidth = compWidth;
      console.log(ref);
    },
  },
};
</script>
