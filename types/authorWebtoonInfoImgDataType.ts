export interface authorWebtoonInfoDataType {
    webtoonTitle: string;
    webtoonDescription: string;
    genre: number;
    publicationDays: number;
    illustrator?: string;
}

export interface authorWebtoonInfoStateType {
    mainImageData: string;
    thumbnailImageData: string;
    title: string;
    description: string;
    genre: string;
    day: string;
    illustrator: string;
    author: string;
}
