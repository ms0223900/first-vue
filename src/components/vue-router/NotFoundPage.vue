<template>
  <div class="not-found">
    <h2>404 Not Found :(</h2>
    <LinkButton linkToName="home" btnText="Home" />
  </div>
</template>

<script>
import LinkButton from './LinkButton.vue';

export default {
  name: 'NotFoundPage',
  components: {
    LinkButton,
  },
};
</script>

<style scoped>
.not-found {
  padding: 10px;
}
h2 {
  color: #bbb;
}
</style>
