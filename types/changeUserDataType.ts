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
  data: {
    profileSkin: string;
  }
}

export interface ChangeProfileSkin {
  data: [{
    memberHasProfileSkinId: number;
    profileSkinDetail: {
      profileSkinImage: string;
    }
  }]
}

export interface UserImgData {
  data: {
    profileImage: string;
  }
}

export interface AuthorImgData {
  profileImage: string;
}

export interface changeProfileSkin {
  data: [{
    memberHasProfileSkinId: number;
    profileSkinDetail: {
      profileSkinImage: string;
    }
  }]
}