export const staticMenuData = [
  {
    id: 1,
    name: 'SideMenu',
    iconUrl: '/assets/images/icons/menuIcon.svg',
    path: '/menu',
  },
  {
    id: 2,
    name: 'Search',
    iconUrl: '/assets/images/icons/searchIcon.svg',
    path: '/search',
    innerMenu: [
      {
        id: 1,
        name: 'Search',
        iconUrl: '/assets/images/icons/searchIcon.svg',
        path: '/search',
      },
      {
        id: 3,
        name: 'User',
        iconUrl: '/assets/images/icons/userIcon.svg',
        path: '/login',
      }
    ]
  },
];