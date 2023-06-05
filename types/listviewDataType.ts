export interface listviewDataType {
  id: number;
  webtoonId: number;
  webtoonTitle: string;
  creator: string;
  illustrator: string;
  thumbnail: string;
  genre: string;
  views?: number;
  likes?: number;
  episodeId?: string;
  episodeTitle?: string;
  uploadDate?: string;
  endDate?: string;
}