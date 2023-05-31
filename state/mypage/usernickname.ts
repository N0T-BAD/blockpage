import { atom } from "recoil";

const usernickname = atom({
    key: "usernickname",
    default: {
        nickname: "",
    },
});

const authornickname = atom({
    key: "authornickname",
    default: {
        authornickname: "",
    },
});

export { usernickname, authornickname };