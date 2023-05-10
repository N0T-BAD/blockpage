import { atom } from "recoil";
import { changeEpisodeInfoFormDataType } from "@/types/episodeInfoForm";

const changeEpisodeInfoState = atom<changeEpisodeInfoFormDataType>({
  key: "changeEpisodeInfoState",
  default: {
    id: "",
    title: "",
    episodetitle: "",
    episodedescription: "",
    day: "",
    authortalk: "",
    episodeThumbnail: "",
    episodeImage: "",
  },
});

export { changeEpisodeInfoState };