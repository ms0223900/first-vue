<script>
import OriginVue from 'vue';
import Vue from 'vue/dist/vue.esm';
import VueRouter from 'vue-router';
import RouterPageVue from './RouterPage.vue';

const Intro = Vue.component('Intro', {
  template: '<div>Hi, Here is Intro</div>',
});
const VueRouterIntro = Vue.component('VueRouterIntro', {
  template: '<div>Hi, VueRouterIntro</div>',
});

const NamedViewPage = Vue.component('NamedViewPage', {
  template: '<div style="background-color: #ddd;">Hi, NamedViewPage Here</div>',
});
const CompInsideView = Vue.component('CompInsideView', {
  template: '<div style="background-color: #aaa;">Hi, CompInsideView Here</div>',
});

OriginVue.use(VueRouter);

const router = new VueRouter({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: RouterPageVue,
    },
    {
      path: '/v-router',
      component: RouterPageVue,
      children: [
        {
          path: 'intro',
          name: 'intro',
          component: Intro,
        },
        {
          path: 'vue-router',
          name: 'vueRouterIntro',
          component: VueRouterIntro,
        },
        {
          path: 'named-views',
          name: 'namedViews',
          components: {
            default: NamedViewPage,
            compInside: CompInsideView,
          },
        },
      ],
    },
  ],
});

export default router;
</script>
