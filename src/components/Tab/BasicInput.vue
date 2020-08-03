<template>
  <input
    type="number"
    :placeholder="placeholder"
    :value.sync="inputValue"
    @change="onChange"
  />
</template>

<script>
export default {
  name: 'BasicInput',
  props: {
    placeholder: String,
    inputValue: String || Number,
    onChange: Function,
  },
  watch: {
    inputValue(val) {
      console.log(val);
    },
  },
};
</script>
<style scoped>
input {
  margin: 10px;
  padding: 10px;
}
</style>
