<template>
  <div>
    <LinkButton
      v-for="(singleLink, index) in linkListData"
      :key="index"
      :path="singleLink.path"
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
  </div>
</template>

<script>
import LinkButton from './LinkButton.vue';
import ButtonWrapper from '../ButtonWrapper.vue';
import routerBackByKeyCode from '../../lib/routerBackByKeyCode';
import linkListData from '../../static/link-list-data.ts';

export default {
  name: 'NavBar',
  data() {
    return ({
      linkListData,
    });
  },
  mixins: [
    routerBackByKeyCode(),
  ],
  components: {
    LinkButton,
    ButtonWrapper,
  },
};
</script>
