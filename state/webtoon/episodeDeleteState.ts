import { atom } from "recoil";
import { webtoonepisodeDataType } from '@/types/webtoonDataType';

const episodeDeleteState = atom<webtoonepisodeDataType>({
    key: "episodeDeleteState",
    default: {
        id: "",
        title: "",
    },
});

export { episodeDeleteState };