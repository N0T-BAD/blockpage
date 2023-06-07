export interface episodeInfoFormDataType {
  data: [{
    episodeTitle: string;
    uploadDate: string;
    participantCount: number;
    episodeNumber: number;
    totalScore: number;
  }]
}

export interface ChangeEpisodeInfo {
  data: [{
    episodeTitle: string;
    uploadDate: string;
    participantCount: number;
    episodeNumber: number;
    totalScore: number;
    authorWords: string;
    webtoonStatus: string;
  }]
}

export interface episodeInfoData {
  episodeNumber: number;
  episodeTitle: string;
  uploadDate: string;
  authorWords: string;
}

export interface episodeInfoType {
  episodeTitle: string;
  uploadDate: string;
  authorWords: string;
}

export interface ChangeepisodeInfoType {
  webtoonId: number;
  episodeNumber: number;
  episodeTitle: string;
  uploadDate: string;
  authorWords: string;
  episodeThumbnail: string;
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