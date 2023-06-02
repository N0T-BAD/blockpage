import { atom } from "recoil";

const userrole = atom({
    key: "userrole",
    default: {
        role: "",
    },
});

export { userrole };