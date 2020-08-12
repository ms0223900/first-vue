<template>
  <div>
      <h3>{{ "Value from provider.context.state.value: " + context.state.value }}</h3>
      <h3>{{ "Value from provider.context.valueFromData: " + context.state.valueFromData }}</h3>
      <button @click="handleChangeContext">Try Change Context</button>
      <hr />
      <h3>Component Inside</h3>
      <slot></slot>
    </div>
</template>

<script>
export default {
  inject: ['context'],
  methods: {
    handleChangeContext() {
      console.log('called');
      console.log(this.context);
      // this.context.state.valueFromData = 'Hello';
      this.context.dispatch.handleChangeContext();
    },
  },
};
</script>
