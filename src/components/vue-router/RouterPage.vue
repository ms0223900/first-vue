<template>
  <div>
    <LinkButton
      v-for="(singleLink, index) in linkListData"
      :key="index"
      :linkToName="singleLink.linkToName"
      :btnText="singleLink.btnText"
      :params="singleLink.params"
    />
    <ButtonWrapper :onClick="handleBack">
      <template v-slot:button-text>
        <h3>Back</h3>
      </template>
    </ButtonWrapper>
    <div>{{ "Path: " + this.$route.path }}</div>
    <NamedViews />
  </div>
</template>

<script>
import NamedViews from './NamedViews.vue';
import LinkButton from './LinkButton.vue';
import ButtonWrapper from '../ButtonWrapper.vue';

const linkListData = [
  { linkToName: 'home', btnText: 'Home' },
  { linkToName: 'intro', btnText: 'Intro' },
  { linkToName: 'vueRouterIntro', btnText: 'Vue Router' },
  { linkToName: 'namedViews', btnText: 'Named Views' },
  { linkToName: 'user', btnText: 'User Page', params: { userId: '1' } },
];

export default {
  name: 'RouterPage',
  data() {
    return ({
      linkListData,
    });
  },
  mounted() {
    window.addEventListener('keyup', (e) => {
      if (e.keyCode === 8) {
        this.handleBack();
      }
    });
  },
  methods: {
    handleBack() {
      this.$router.go(-1);
    },
  },
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
    LinkButton,
    ButtonWrapper,
  },
};
</script>
