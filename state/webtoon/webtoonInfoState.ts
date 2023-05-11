import { atom } from "recoil";

const webtoonInfoState = atom({
    key: "webtoonInfoState",
    default: {
        author: "",
        mainImageData: "",
        thumbnailImageData: "",
        title: "",
        description: "",
        genre: "",
        day: "",
        illustrator: "",
    },
});

export { webtoonInfoState };