export interface WebToonListDataType {
  id: number;
  title: string;
  author: string;
  illustrator: string;
  titleImg: string;
  views: number;
  likes: number;
  week: string;
  genre: string;
  summary: string;
  state: string;
  episodeData: EpisodeListDataType[];
}

export interface EpisodeListDataType {
  id: number;
  subject: string;
  thumbnail: string;
  imgUrls: imgListType[];
  rating: number;
  date: string;
}

export interface imgListType {
  id: number;
  imgUrl: string;
}

export interface WebToonDetailDataType {
  id: number;
  title: string;
}

export interface webtoonDeleteDataType {
  deletereason: string;
}

export interface webtoonTitleDataType {
  title: string;
}