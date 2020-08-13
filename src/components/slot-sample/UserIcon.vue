<template>
  <div :style="{ width: '100px', height: 100, }">
    <img :src="iconImgSrc" :style="{ width: '100%', }" />
  </div>
</template>

<script>
export default {
  props: {
    iconImgSrc: String,
  },
};
</script>
