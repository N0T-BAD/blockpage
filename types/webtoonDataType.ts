export interface webtoonDeleteDataType {
  deletereason: string;
}

export interface webtoonTitleDataType {
  title: string;
}

export interface webtoonepisodeDataType {
  id: string;
  title: string;
}

export interface episodeDeleteDataType {
  episodedeletereason: string;
}

export interface WebtoonInfoDataType {
  id: number;
  title: string;
  author: string;
  imgUrl: string;
  views: number;
  likes: number;
  week: string;
  genre: string;
}

export interface WebtoonSummaryDataType {
  id: number;
  summary: string;
}

export interface WebtoonStateDataType {
  id: number;
  state: string;
}

export interface EpisodeDataType {
  id: number;
  subject: string;
  imgUrl: string;
  rating: number;
  date: string;
}
