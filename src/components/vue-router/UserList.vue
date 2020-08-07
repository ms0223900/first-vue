<template>
  <div>
    <UserItem
      v-for="(singleUser, index) in userListData"
      :key="index"
      :user="singleUser"
    />
    <router-view />
  </div>
</template>

<script>
import UserItem from './UserItem.vue';
import userListData from '../../static/user-list.ts';

export default {
  name: 'User',
  data() {
    return ({
      userListData,
    });
  },
  components: {
    UserItem,
  },
};
</script>
