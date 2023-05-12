export interface commentDataType {
  parentsId: number;
  parentsNickname: string;
  childId?: number;
  childNickname?: string;
  content: string;
  likesCount: number;
  dislikesCount: number;
  replyCount: number;
  report: boolean;
  erase: boolean;
  pin: boolean;
  date: string;
}
