import React from 'react'

import { CommentDataType, CommentUserDataType } from '@/types/commentDataType';
import Comment from './Comment';

export default function GetComment(props: { commentData: CommentDataType[], nickNameData: string }) {
  return (
    <>
      {
        props.commentData &&
        props.commentData.map((parentsData) => (
          !parentsData.childId &&
          <Comment
            key={parentsData.commentId}
            nickNameData={props.nickNameData}
            commentData={parentsData}
          />
        ))
      }
    </>
  )
}