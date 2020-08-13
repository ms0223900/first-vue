<template>
  <UserPageWrapper>
    <template v-slot:user="slotProps">
      <UserIcon :iconImgSrc="slotProps.user.iconImgSrc" />
    </template>
  </UserPageWrapper>
</template>

<script>
import UserIcon from './UserIcon.vue';
import UserPageWrapper from './UserPageWrapper.vue';

export default {
  components: {
    UserPageWrapper,
    UserIcon,
  },
};
</script>
