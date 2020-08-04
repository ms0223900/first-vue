<template>
  <div>
  <h1 ref="title">
    {{ "hi" }}
  </h1>
  <button @click="getRef">
    {{ "click to see ref" }}
  </button>
  </div>
</template>

<script>
export default {
  data() {
    return ({ clicked: 0 });
  },
  methods: {
    getRef() {
      console.log(this.$refs.title);
    },
  },
};
</script>
