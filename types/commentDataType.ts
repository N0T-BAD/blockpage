export interface CommentDataType {
  data: [
    {
      episodeId: number;
      commentId: number;
      dateTime: string;
      parentsId: string;
      parentsNickname: string;
      childId?: string;
      childNickname?: string;
      content: string;
      likesCount: number;
      dislikesCount: number;
      replyCount: number;
      report: boolean;
      erase: boolean;
      pin: boolean;
    }
  ];
}

export interface CommentDataMapType {
  episodeId: number;
  commentId: number;
  dateTime: string;
  parentsId: string;
  parentsNickname: string;
  childId?: string;
  childNickname?: string;
  content: string;
  likesCount: number;
  dislikesCount: number;
  replyCount: number;
  report: boolean;
  erase: boolean;
  pin: boolean;
}

export interface CommentUserDataType {
  data: {
    nickname: string;
  };
}
