import { authorwebtoonData } from "@/types/authorWorksListDataType";
import { atom } from "recoil";

const webtoonlist = atom<authorwebtoonData>({
    key: "webtoonlist",
    default: {
        data: [{
            webtoonId: 0,
            webtoonTitle: '',
            webtoonThumbnail: '',
            creator: '',
            illustrator: '',
            views: 0,
            interestCount: 0,
            genreType: 0,
        }]
    },
});

export { webtoonlist };