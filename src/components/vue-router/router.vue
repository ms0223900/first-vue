<script>
import OriginVue from 'vue';
import Vue from 'vue/dist/vue.esm';
import VueRouter from 'vue-router';

const Intro = Vue.component('Intro', {
  template: '<div>Hi, Here is Intro</div>',
});
const VueRouterIntro = Vue.component('VueRouterIntro', {
  template: '<div>Hi, VueRouterIntro</div>',
});

OriginVue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/intro',
      name: 'intro',
      component: Intro,
    },
    {
      path: '/vue-router',
      name: 'vueRouterIntro',
      component: VueRouterIntro,
    },
  ],
});

export default router;
</script>
