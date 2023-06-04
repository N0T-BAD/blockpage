import { atom } from "recoil";

const webtoonDeleteState = atom({
    key: "webtoonDeleteState",
    default: {
        webtoonTitle: "",
    },
});

export { webtoonDeleteState };