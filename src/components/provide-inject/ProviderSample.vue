<template>
  <ContextProvider>
    <InnerComp>
      <InjectDeepChild />
    </InnerComp>
  </ContextProvider>
</template>

<script>
import ContextProvider from './ContextProvider.vue';
import InjectDeepChild from './InjectDeepChild.vue';
import InnerComp from './InnerComp.vue';

export default {
  components: {
    ContextProvider,
    InjectDeepChild,
    InnerComp,
  },
};
</script>
