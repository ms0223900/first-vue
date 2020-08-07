<template>
  <div>
    <NamedViews />
  </div>
</template>

<script>
import NamedViews from './NamedViews.vue';

export default {
  name: 'RouterPage',
  watch: {
    $route(to, from) {
      console.log(to, from);
    },
  },
  beforeRouteUpdate(to, from, next) {
    console.log(to, from, next);
    next();
  },
  components: {
    NamedViews,
  },
};
</script>
