export interface CommentDataType {
  episodeId: number;
  commentId: number;
  dateTime: string;
  parentsId: string;
  parentsNickname: string;
  profileImage: string;
  profileSkin: string;
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
  nickname: string;
}

export interface ParentsCommentType {
  parentsId: string;
  parentsNickname: string;
  parentsCommentId: number;
}

export interface CommentEmotionDataType {
  id: number;
  commentId: number;
  emotion: boolean;
  choice: boolean;
}
