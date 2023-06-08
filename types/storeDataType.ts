export interface skinDataType {
  profileSkinId: number;
  profileSkinName: string;
  profileSkinDescription: string;
  profileSkinImage: string;
  profileSkinBlockPrice: number;
}

export interface userDataType {
  nickname: string;
  profileImage: string;
  profileSkin: string;
  role: string;
  creatorNickname: string;
}
