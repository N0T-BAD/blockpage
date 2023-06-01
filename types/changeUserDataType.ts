export interface ChangeUserDataType {
  data: {
    nickname: string;
  }
}

export interface ChangeUserImageDataType {
  profileimage: string;
  profileskin?: string;
}

export interface profileskinDataType {
  imgurl: string;
}

export interface UserImgData {
  data: {
    profileImage: string;
  }
}