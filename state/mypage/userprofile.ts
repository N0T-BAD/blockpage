import { atom } from "recoil";

const userprofile = atom({
    key: "userprofile",
    default: {
        data: {
            profileImage: "",
        },
    }
});

export { userprofile };