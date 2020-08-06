<template>
<div>
  <h3>NamedViews</h3>
  <router-view />
  <router-view name="compInside" />
</div>
</template>
<script>
export default {
  name: 'NamedViews',
};
</script>
