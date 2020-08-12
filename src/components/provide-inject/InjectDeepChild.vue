<template>
  <div>
    <h3>{{ "Value from context: " + ctxValue }}</h3>
  </div>
</template>

<script>
export default {
  inject: ['context'],
  computed: {
    ctxValue() {
      return this.context.state.valueFromData;
    },
  },
};
</script>
