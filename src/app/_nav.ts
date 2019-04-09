export const navigation = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'UI elements'
  },
  {
    name: 'Answers DB',
    url: '/answers',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Answers list',
        url: '/answers/answerslist',
        icon: 'icon-puzzle'
      },
      {
        name: 'Answer add',
        url: '/answers/answeradd',
        icon: 'icon-puzzle'
      }
    ]
  },
  // {
  //   divider: true
  // },
  // {
  //   title: true,
  //   name: 'Extras',
  // },
  // {
  //   name: 'Pages',
  //   url: '/pages',
  //   icon: 'icon-star',
  //   children: [
  //     {
  //       name: 'Login',
  //       url: '/pages/login',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Register',
  //       url: '/pages/register',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Error 404',
  //       url: '/pages/404',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Error 500',
  //       url: '/pages/500',
  //       icon: 'icon-star'
  //     }
  //   ]
  // },
];
