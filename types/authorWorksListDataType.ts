export interface transactionHistoryData {
  id: number;
  name: string;
  webtoonsubcategories: authorwebtoonsubcategories[];
}

export interface authorwebtoonsubcategories {
  subCategoryId: number;
  views: string;
  likes: string;
  title: string;
  author: string;
  imgurl: string;
}