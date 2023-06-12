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

export interface nftDataType {
  nftId: number;
  nftCreatorId: string;
  nftMemberId: string;
  nftName: string;
  nftDescription: string;
  nftImage: string;
  nftBlockPrice: number;
  nftType: string;
}

export interface nftListData {
  data: [
    {
      memberId: string;
      expiredDate: string;
      memberHasNftId: number;
      nftDetail: {
        id: number;
        nftName: string;
        nftDescription: string;
        nftImage: string;
        nftType: string;
      };
    }
  ];
}

export interface mySkinData {
  expiredDate: string;
  memberHasProfileSkinId: number;
  memberId: string;
  profileSkinDefault: boolean;
  profileSkinDetail: profileSkinDetail[];
}

export interface profileSkinDetail {
  id: number;
  profileSkinBlockPrice: number;
  profileSkinDescription: string;
  profileSkinImage: string;
  profileSkinName: string;
}
