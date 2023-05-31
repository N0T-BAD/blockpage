export interface authorWebtoonInfoDataType {
    webtoonTitle: string;
    webtoonDescription: string;
    genre: string;
    publicationDays: string;
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
