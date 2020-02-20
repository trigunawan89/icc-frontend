import Vue from 'vue'
import Router from 'vue-router'
import AuthLayout from '../components/auth/AuthLayout'
import AppLayout from '../components/admin/AppLayout'

Vue.use(Router)

const EmptyParentComponent = {
  template: '<router-view></router-view>',
}

const demoRoutes = []

export default new Router({
  mode: process.env.VUE_APP_ROUTER_MODE_HISTORY === 'true' ? 'history' : 'hash',
  routes: [
    ...demoRoutes,
    {
      path: '*',
      redirect: { name: 'home' },
    },
    {
      path: '/auth',
      component: AuthLayout,
      children: [
        {
          name: 'login',
          path: 'login',
          component: () => import('../components/auth/login/Login.vue'),
        },
        {
          name: 'signup',
          path: 'signup',
          component: () => import('../components/auth/signup/Signup.vue'),
        },
        {
          name: 'recover-password',
          path: 'recover-password',
          component: () => import('../components/auth/recover-password/RecoverPassword.vue'),
        },
        {
          path: '',
          redirect: { name: 'login' },
        },
      ],
    },
    {
      path: '/404',
      component: EmptyParentComponent,
      children: [
        {
          name: 'not-found-advanced',
          path: 'not-found-advanced',
          component: () => import('../components/pages/404-pages/VaPageNotFoundSearch.vue'),
        },
        {
          name: 'not-found-simple',
          path: 'not-found-simple',
          component: () => import('../components/pages/404-pages/VaPageNotFoundSimple.vue'),
        },
        {
          name: 'not-found-custom',
          path: 'not-found-custom',
          component: () => import('../components/pages/404-pages/VaPageNotFoundCustom.vue'),
        },
        {
          name: 'not-found-large-text',
          path: '/pages/not-found-large-text',
          component: () => import('../components/pages/404-pages/VaPageNotFoundLargeText.vue'),
        },
      ],
    },
    {
      name: 'Admin',
      path: '/admin',
      component: AppLayout,
      children: [
        {
          name: 'home',
          path: 'home',
          component: () => import('../components/home/Home.vue'),
          default: true,
        },
        {
          name: 'profile',
          path: 'profile',
          component: () => import('../components/profile/Profile.vue'),
        },
        {
          name: 'dashboard',
          path: 'dashboard',
          component: () => import('../components/dashboard/Dashboard.vue'),
          // default: true,
        },
        {
          name: 'travel',
          path: 'travel',
          component: EmptyParentComponent,
          children: [
            {
              name: 'travel-global',
              path: 'travel-global',
              component: () => import('../components/travel-global/TravelGlobal.vue'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Charts',
              },
            },
            {
              name: 'travel-region',
              path: 'travel-region',
              component: () => import('../components/travel-region/TravelRegion.vue'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Charts',
              },
            },
            {
              name: 'travel-advice',
              path: 'travel-advice',
              component: () => import('../components/travel-advice/TravelAdvice.vue'),
              meta: {
                wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Charts',
              },
            },

          ],
        },
        {
          name: 'advisory',
          path: 'advisory',
          component: () => import('../components/advisory/Advisory.vue'),
          // default: true,
        },
        {
          name: 'guideline',
          path: 'guideline',
          component: () => import('../components/guideline/Guideline.vue'),
          // default: true,
        },
        {
          name: 'emergency',
          path: 'emergency',
          component: () => import('../components/emergency/Emergency.vue'),
          // default: true,
        },
        {
          name: 'map',
          path: 'map',
          component: () => import('../components/maps/leaflet-maps/LeafletMapsPage'),
          meta: {
            wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Maps',
          },
        },
        {
          name: 'calendar',
          path: 'calendar',
          component: () => import('../components/calendar/Calendar'),
          meta: {
            wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Maps',
          },
        },
        {
          name: 'contact-us',
          path: 'contact-us',
          component: () => import('../components/contact-us/ContactUs'),
          meta: {
            wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Maps',
          },
        },
        {
          name: 'post',
          path: 'post',
          component: () => import('../components/post/Post'),
          meta: {
            wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Maps',
          },
        },
      ],
    },
  ],
})
