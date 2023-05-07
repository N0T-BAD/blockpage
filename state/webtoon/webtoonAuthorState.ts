import { atom } from "recoil";

const webtoonAuthorState = atom({
    key: "webtoonAuthorState",
    default: {
        author: "",
    },
});

export { webtoonAuthorState };