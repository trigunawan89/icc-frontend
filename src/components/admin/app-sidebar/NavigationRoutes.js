export const navigationRoutes = {
  root: {
    name: '/',
    displayName: 'navigationRoutes.home',
  },
  routes: [

    {
      name: 'home',
      displayName: 'menu.home',
      meta: {
        iconClass: 'glyphicon glyphicon-home',
      },
    },
    {
      name: 'travel',
      displayName: 'menu.travel',
      meta: {
        iconClass: 'glyphicon glyphicon-briefcase',
      },
      disabled: true,
      children: [
        {
          name: 'travel-global',
          displayName: 'menu.travel-global',
        },
        {
          name: 'travel-region',
          displayName: 'menu.travel-region',
        },
        {
          name: 'travel-advice',
          displayName: 'menu.travel-advice',
        },

      ],
    },
    {
      name: 'advisory',
      displayName: 'menu.advisory',
      meta: {
        iconClass: 'glyphicon glyphicon-bullhorn',
      },

    },
    {
      name: 'guideline',
      displayName: 'menu.guideline',
      meta: {
        iconClass: 'glyphicon glyphicon-book',
      },
    },
    {
      name: 'emergency',
      displayName: 'menu.emergency',
      meta: {
        iconClass: 'glyphicon glyphicon-plus-sign',
      },
    },
    {
      name: 'map',
      displayName: 'menu.map',
      meta: {
        iconClass: 'glyphicon glyphicon-map-marker',
      },
    },
    {
      name: 'calendar',
      displayName: 'menu.calendar',
      meta: {
        iconClass: 'glyphicon glyphicon-calendar',
      },
    },
    {
      name: 'contact-us',
      displayName: 'menu.contact',
      meta: {
        iconClass: 'glyphicon glyphicon-headphones',
      },
    },
  ],
}
