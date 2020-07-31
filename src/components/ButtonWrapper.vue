<template>
  <button class="basic-button">
    <slot name="button-text"></slot>
  </button>
</template>

<script>
export default {
  name: 'ButtonWrapper',
};
</script>

<style scoped>
.basic-button {
  background-color: #ddd;
  border-radius: 10px;
}
.basic-button:hover {
  background-color: #aaa;
}
</style>
