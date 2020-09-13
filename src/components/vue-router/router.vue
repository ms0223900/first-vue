<script>
import OriginVue from 'vue';
import Vue from 'vue/dist/vue.esm';
import VueRouter from 'vue-router';
import RouterPageVue from './RouterPage.vue';
// import UserPageVue from './UserPage.vue';
import NotFoundPageVue from './NotFoundPage.vue';
import UserListVue from './UserList.vue';
import VBindSyncVue from '../v-bind-sync-sample/VBindSync.vue';
import ParentChildrenVue from '../parent-children/ParentChildren.vue';
import ProviderSample from '../provide-inject/ProviderSample.vue';
import SlotPropsSampleVue from '../slot-sample/SlotPropsSample.vue';
import VuexSampleVue from '../../vuex/VuexSample.vue';

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

const UserPageVue = () => import('./UserPage.vue');

OriginVue.use(VueRouter);

const router = new VueRouter({
  // mode: 'history',
  routes: [
    {
      path: '*',
      component: NotFoundPageVue,
    },
    {
      path: '/',
      name: 'home',
      component: RouterPageVue,
    },
    {
      path: '/v-bind-sync',
      name: 'v-bind-sync',
      component: VBindSyncVue,
    },
    {
      path: '/parent-children',
      name: 'parent-children',
      component: ParentChildrenVue,
    },
    {
      path: '/provide-inject',
      name: 'provide-inject',
      component: ProviderSample,
    },
    {
      path: '/slot-props',
      name: 'slot-props',
      component: SlotPropsSampleVue,
    },
    {
      path: '/users',
      name: 'users',
      component: UserListVue,
      children: [
        {
          path: ':userId',
          name: 'user',
          component: UserPageVue,
        },
      ],
    },
    // {
    //   path: 'user/:userId',
    //   name: 'user',
    //   component: UserPageVue,
    // },
    {
      path: '/v-router',
      name: 'vRouter',
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
    {
      path: '/vuex-sample',
      name: 'vuexSample',
      component: VuexSampleVue,
    },
  ],
});

export default router;
</script>
