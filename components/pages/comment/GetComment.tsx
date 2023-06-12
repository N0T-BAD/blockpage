import React from 'react'

import { CommentDataType } from '@/types/commentDataType';
import Comment from './Comment';
import { userDataType } from '@/types/storeDataType';

export default function GetComment(props: { commentData: CommentDataType[], userData: userDataType }) {
  return (
    <>
      {
        props.commentData &&
        props.commentData.map((parentsData) => (
          !parentsData.childId &&
          <Comment
            key={parentsData.commentId}
            userData={props.userData}
            commentData={parentsData}
          />
        ))
      }
    </>
  )
}