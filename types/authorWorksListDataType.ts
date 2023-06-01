export interface transactionHistoryData {
  id: number;
  name: string;
}

export interface authorwebtoonsubcategories {
  subCategoryId: number;
  views: string;
  likes: string;
  title: string;
  author: string;
  imgurl: string;
}

export interface authorwebtoonData {
  data: [{
    webtoonId: number;
    webtoonTitle: string;
    webtoonThumbnail: string;
    creator: string;
    illustrator: string;
    views: number;
    interestCount: number;
    genreType: number;
  }]
}