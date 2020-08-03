<template>
  <div>
    <input
      type="number"
      :placeholder="placeholder"
      :value="inputValue"
      @input="$emit('input', $event.target.value)"
    />
    <span>{{ inputValue + ' ' + unit }}</span>
  </div>
</template>

<script>
export default {
  name: 'BasicInput',
  props: {
    unit: String,
    placeholder: String,
    inputValue: String || Number,
    // onChange: Function,
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
