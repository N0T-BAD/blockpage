import { atom } from "recoil";

const webtoonDeleteState = atom({
    key: "webtoonDeleteState",
    default: {
        title: "",
    },
});

export { webtoonDeleteState };