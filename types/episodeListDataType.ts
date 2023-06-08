export interface episodeListDataType {
  id: number;
  imgUrl: string;
  title: string;
  rating: string;
  day: string;
}

export interface episodeReadDataType {
  creator: string;
  episodeId: number;
  expiredDate: string;
  genre: string;
  illustrator: string;
  memberHasEpisodeBMId: number;
  memberId: string;
  webtoonId: number;
  webtoonThumbnail: string;
  webtoonTitle: string;
}
