import { atom } from "recoil";

const usernickname = atom({
  key: "usernickname",
  default: {
    data: {
      nickname: "",
    },
  },
});

const authornickname = atom({
  key: "authornickname",
  default: {
    data: {
      creatorNickname: "",
    },
  },
});

export { usernickname, authornickname };
