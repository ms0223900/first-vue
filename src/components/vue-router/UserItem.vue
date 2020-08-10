<template>
  <div>
    <router-link :[routerLinkPropName]="path">
      <h3>{{ user.name }}</h3>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'UserItem',
  data() {
    return ({
      // for testing v-bind:[key]
      routerLinkPropName: 'to',
    });
  },
  props: {
    user: {
      id: String || Number,
      name: String,
    },
  },
  computed: {
    path() {
      return ({
        // path: `users/${this.user.id}`,
        name: 'user',
        params: { userId: this.user.id },
      });
    },
  },
};
</script>
