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
    divider: true
  },
  {
    title: true,
    name: 'All projects'
  },
  {
    name: 'Projects',
    url: '/projects',
    icon: 'icon-star'
  },
  {
    title: true,
    name: 'Answers module'
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
      },
      {
        name: 'Categorys list',
        url: '/answers/categoryslist',
        icon: 'icon-puzzle'
      },
      {
        name: 'Category add',
        url: '/answers/categoryadd',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Extras',
  },
  {
    name: 'Pages',
    url: '/pages',
    icon: 'icon-star',
    children: [
      {
        name: 'Login',
        url: '/pages/login',
        icon: 'icon-star'
      },
      {
        name: 'Register',
        url: '/pages/register',
        icon: 'icon-star'
      },
      {
        name: 'Error 404',
        url: '/pages/404',
        icon: 'icon-star'
      },
      {
        name: 'Error 500',
        url: '/pages/500',
        icon: 'icon-star'
      }
    ]
  },
];
