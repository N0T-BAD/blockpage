export interface listviewDataType {
  id: number;
  webtoonId: number;
  webtoonTitle: string;
  creator: string;
  illustrator: string;
  webtoonThumbnail: string;
  webtoonDescription?: string;
  genre: number;
  publicationDays?: number;
  views?: number;
  interestCount?: number;
  webtoonStatus?: string;
  episodeId?: string;
  episodeTitle?: string;
  episodeNumber?: number;
  uploadDate?: string;
  endDate?: string;
}
