export interface WebToonListDataType {
  data: {
    webtoonTitle: string;
    creator: string;
    illustrator: string;
    publicationDays: string;
    genre: string;
    webtoonThumbnail: string;
    episodeViewList: EpisodeViewListType[];
  };
  meta: {
    sort: string;
  };
}

export interface EpisodeViewListType {
  episodeTitle: string;
  episodeThumbnail: string;
  uploadDate: string;
  totalScore: string;
}

export interface EpisodeListDataType {
  id: number;
  subject: string;
  thumbnail: string;
  authorComment: string;
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

export interface webtoonListGetDataType {
  data: [
    {
      webtoonId: number;
      webtoonTitle: string;
      webtoonThumbnail: string;
      creator: string;
      illustrator: string;
      views: number;
      interestCount: number;
      genreType: number;
    }
  ];
}
