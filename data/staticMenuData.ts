export const staticMenuData = [
  {
    id: 1,
    name: "SideMenu",
    iconUrl: "/assets/images/icons/menuIcon.svg",
    path: "/menu",
  },
  {
    id: 2,
    name: "User",
    iconUrl: "/assets/images/icons/userIcon.svg",
    path: "/login",
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

export const staticArchiveMenuData = [
  {
    id: 1,
    name: "최근 감상",
    link: "history",
  },
  {
    id: 2,
    name: "찜한 작품",
    link: "favorite",
  },
  {
    id: 3,
    name: "구매 작품",
    link: "purchase",
  },
];

export const staticTopNavData = [
  {
    id: 1,
    name: "요일별 웹툰",
    link: "week",
  },
  {
    id: 2,
    name: "장르별 웹툰",
    link: "genre",
  },
  {
    id: 3,
    name: "베스트",
    link: "best",
  },
];

export const staticWeekNavData = [
  {
    id: 1,
    name: "월",
    link: "/week?category=1",
  },
  {
    id: 2,
    name: "화",
    link: "/week?category=2",
  },
  {
    id: 3,
    name: "수",
    link: "/week?category=3",
  },
  {
    id: 4,
    name: "목",
    link: "/week?category=4",
  },
  {
    id: 5,
    name: "금",
    link: "/week?category=5",
  },
  {
    id: 6,
    name: "토",
    link: "/week?category=6",
  },
  {
    id: 7,
    name: "일",
    link: "/week?category=7",
  },
];

export const staticGenreNavData = [
  {
    id: 1,
    name: "로맨스",
    link: "/genre?category=1",
  },
  {
    id: 2,
    name: "액션",
    link: "/genre?category=2",
  },
  {
    id: 3,
    name: "무협",
    link: "/genre?category=3",
  },
  {
    id: 4,
    name: "드라마",
    link: "/genre?category=4",
  },
  {
    id: 5,
    name: "판타지",
    link: "/genre?category=5",
  },
  {
    id: 6,
    name: "로맨스 판타지",
    link: "/genre?category=6",
  },
  {
    id: 7,
    name: "성인",
    link: "/genre?category=7",
  },
];

export const categoryMenuData = [
  {
    id: 1,
    name: "요일별",
    data: [
      {
        id: 1,
        name: "월",
        categoryId: 1,
      },
      {
        id: 2,
        name: "화",
        categoryId: 2,
      },
      {
        id: 3,
        name: "수",
        categoryId: 3,
      },
      {
        id: 4,
        name: "목",
        categoryId: 4,
      },
      {
        id: 5,
        name: "금",
        categoryId: 5,
      },
      {
        id: 6,
        name: "토",
        categoryId: 6,
      },
      {
        id: 7,
        name: "일",
        categoryId: 7,
      },
    ],
  },
  {
    id: 2,
    name: "카테고리",
    data: [
      {
        id: 1,
        name: "로맨스",
        categoryId: 8,
      },
      {
        id: 2,
        name: "액션",
        categoryId: 9,
      },
      {
        id: 3,
        name: "무협",
        categoryId: 10,
      },
      {
        id: 4,
        name: "드라마",
        categoryId: 11,
      },
      {
        id: 5,
        name: "판타지",
        categoryId: 12,
      },
      {
        id: 6,
        name: "로맨스판타지",
        categoryId: 13,
      },
      {
        id: 7,
        name: "성인",
        categoryId: 14,
      },
    ],
  },
];

export const staticMenuListData = [
  {
    id: 1,
    name: "요일별 웹툰",
    link: "/category/week",
  },
  {
    id: 2,
    name: "장르별 웹툰",
    link: "/category/genre",
  },
  {
    id: 3,
    name: "인기순 웹툰",
    link: "/category/best",
  },
  {
    id: 4,
    name: "게임",
    link: "/game",
  },
  {
    id: 5,
    name: "보관함",
    link: "/webtoonarchive/history",
  },
];
