export interface authorWebtoonInfoDataType {
    webtoonTitle: string;
    webtoonDescription: string;
    genre: number;
    publicationDays: number;
    illustrator?: string;
}

export interface WebtoonStatusData {
    data: {
        webtoonStatus: string;
    }
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

export interface ChangeWebtoon {
    data: [{
        webtoonId: number;
        webtoonTitle: string;
        webtoonDescription: string;
        genre: number;
        publicationDays: number;
        illustrator: string;
        creator: string;
        webtoonStatus: string;
    }]
}

export interface ChangeEpisode {
    data: [{
        webtoonId: number;
    }]
}
