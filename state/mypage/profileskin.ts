import { atom } from "recoil";

const profileskin = atom({
    key: "profileskin",
    default: {
        data: {
            profileSkin: "",
        },
    },
});

export { profileskin };