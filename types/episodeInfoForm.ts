export interface episodeInfoFormDataType {
  webtoonId: number;
  episodeNumber: number;
  episodeTitle: string;
  uploadDate: string;
  authorWords: string;
}

export interface changeEpisodeInfoFormDataType {
  id: string;
  title: string;
  episodetitle: string;
  episodedescription: string;
  day: string;
  authortalk: string;
  episodeThumbnail: string;
  episodeImage: string;
}

export interface UploadedFile {
  name: string;
  preview: string;
}

export interface UploadFile {
  name: string;
  preview: string;
  file: File;
}