export interface WebToonListDataType {
  data: {
    webtoonTitle: string;
    webtoonThumnail: string;
    creator: string;
    illustrator: string;
    description: string;
    publicationDays: string;
    genre: string;
    webtoonMainImage: string;
    views: number;
    interestCount: number;
    episodeViewList: EpisodeViewListType[];
  };
  meta: {
    sort: string;
  };
}

export interface WebToonDataType {
  webtoonTitle: string;
  webtoonThumnail: string;
  creator: string;
  illustrator: string;
  description: string;
  publicationDays: string;
  genre: string;
  webtoonMainImage: string;
  views: number;
  interestCount: number;
  episodeViewList: EpisodeViewListType[];
}

export interface EpisodeViewListType {
  episodeId: number;
  episodeNumber: number;
  episodeTitle: string;
  episodeThumbnail: string;
  uploadDate: string;
  totalScore: number;
  authorWords: string;
}

export interface EpisodeViewDataType {
  data: {
    images: ImagesType[];
    episodeId: number;
    commentCount: number;
    rating: number;
    author: string;
    authorWords: string;
    nextEpisodeTitle: string;
    nextEpisodeThumbnail: string;
  };
}

export interface ImagesType {
  imageUrl: string;
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
