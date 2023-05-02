export const staticMenuData = [
  {
    id: 1,
    name: 'SideMenu',
    iconUrl: '/assets/images/icons/menuIcon.svg',
    path: '/menu',
  },
  {
    id: 2,
    name: 'User',
    iconUrl: '/assets/images/icons/userIcon.svg',
    path: '/login',
  },
  // {
  //   id: 2,
  //   name: 'Search',
  //   iconUrl: '/assets/images/icons/searchIcon.svg',
  //   path: '/search',
  //   innerMenu: [
  //     {
  //       id: 1,
  //       name: 'Search',
  //       iconUrl: '/assets/images/icons/searchIcon.svg',
  //       path: '/search',
  //     },
  //     {
  //       id: 3,
  //       name: 'User',
  //       iconUrl: '/assets/images/icons/userIcon.svg',
  //       path: '/login',
  //     }
  //   ]
  // },
];

export const categoryMenuData = [
  {
    id: 1,
    name: '요일별',
    data: [
      {
        id: 1,
        name: '월',
        categoryId: 1,
      },
      {
        id: 2,
        name: '화',
        categoryId: 2,
      },
      {
        id: 3,
        name: '수',
        categoryId: 3,
      },
      {
        id: 4,
        name: '목',
        categoryId: 4,
      },
      {
        id: 5,
        name: '금',
        categoryId: 5,
      },
      {
        id: 6,
        name: '토',
        categoryId: 6,
      },
      {
        id: 7,
        name: '일',
        categoryId: 7,
      },
    ]
  },
  {
    id: 2,
    name: '카테고리',
    data: [
      {
        id: 1,
        name: '로맨스',
        categoryId: 8,
      },
      {
        id: 2,
        name: '액션',
        categoryId: 9,
      },
      {
        id: 3,
        name: '무협',
        categoryId: 10,
      },
      {
        id: 4,
        name: '드라마',
        categoryId: 11,
      },
      {
        id: 5,
        name: '판타지',
        categoryId: 12,
      },
      {
        id: 6,
        name: '로맨스판타지',
        categoryId: 13,
      },
      {
        id: 7,
        name: '성인',
        categoryId: 14,
      }
    ]
  }
]