import { atom } from "recoil";

const profileskin = atom({
  key: "profileskin",
  default: {
    imgurl: '/assets/images/profile/Transparency.png',
  },
});

export { profileskin };