// export interface MainBannerType {
//   id: number;
//   eventTitle: string;
//   name: string;
//   imgUrl: string;
//   path: string;
//   categoryName: string;
// }

export interface MainBannerType {
  data: [{
    webtoonId: number;
    cutoutImage: string;
    webtoonTitle: string;
    genre: string;
  }]
}
