<template>
  <div>
    <h2>{{ "User id: " + userId }}</h2>
    <h3>{{ "User name from props: " + user.name }}</h3>
    <h3>{{ "User data from props: " + userData.count }}</h3>
  </div>
</template>

<script>
import userListData from '../../static/user-list.ts';

export default {
  name: 'UserPage',
  computed: {
    userId() {
      return this.$route.params.userId;
    },
    user() {
      const matchedUser = userListData
        .find((u) => String(u.id) === String(this.userId));
      const data = matchedUser || {};
      return data;
    },
    userData() {
      return this.user.data || {};
    },
  },
};
</script>
