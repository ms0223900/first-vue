<template>
  <div>
    <LinkButton
      v-for="(singleLink, index) in linkListData"
      :key="index"
      :linkToName="singleLink.linkToName"
      :btnText="singleLink.btnText"
    />
    <div>{{ "Path: " + this.$route.path }}</div>
    <NamedViews />
  </div>
</template>

<script>
import NamedViews from './NamedViews.vue';
import LinkButton from './LinkButton.vue';

const linkListData = [
  { linkToName: 'home', btnText: 'Home' },
  { linkToName: 'intro', btnText: 'Intro' },
  { linkToName: 'vueRouterIntro', btnText: 'Vue Router' },
  { linkToName: 'namedViews', btnText: 'Named Views' },
];

export default {
  name: 'RouterPage',
  data() {
    return ({
      linkListData,
    });
  },
  components: {
    NamedViews,
    LinkButton,
  },
};
</script>
