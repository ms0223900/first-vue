<template>
  <div>
    <router-link :to="{ name: 'intro', }">
      Intro
    </router-link>
    <router-link :to="{ name: 'vueRouterIntro', }">
      Vue Router
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'RouterPage',
};
</script>
