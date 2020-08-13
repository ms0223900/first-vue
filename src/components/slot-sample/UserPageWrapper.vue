<template>
  <div>
    <slot name="user" :user="userData" />
    <hr />
    <p>{{ userData.profile }}</p>
  </div>
</template>

<script>
import loremContent from '../../static/loremContent.ts';

export default {
  data() {
    return ({
      userData: {
        iconImgSrc: 'https://vuejs.org/images/logo.png',
        profile: loremContent,
      },
    });
  },
};
</script>
