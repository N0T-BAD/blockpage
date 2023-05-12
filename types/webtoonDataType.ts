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
    date: Date;
}

export interface imgListType {
    id: number;
    imgUrl: string;
}