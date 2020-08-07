<template>
  <button class="basic-button" @click="onClick">
    <slot name="button-text"></slot>
  </button>
</template>

<script>
export default {
  name: 'ButtonWrapper',
  props: {
    onClick: Function,
  },
};
</script>

<style scoped>
.basic-button {
  background-color: #bbb;
  border-radius: 10px;
}
.basic-button:hover {
  background-color: #aaa;
}
</style>
