<template>
  <p v-pre>
    {{ "This won't be compiled with 'v-pre'" }}
  </p>
</template>

<script>
export default {
  name: 'PreSample',
};
</script>
