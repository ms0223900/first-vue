<template>
  <div>
    <h2>Test V-bind.sync Sample</h2>
    <TextContent :title.sync="content.title" />
  </div>
</template>

<script>
import TextContent from './TextContent.vue';

export default {
  name: 'VBindSync',
  data() {
    return ({
      content: {
        title: '',
      },
    });
  },
  components: {
    TextContent,
  },
};
</script>
