import React, { useEffect, useState } from 'react'

import { CommentDataType } from '@/types/commentDataType';
import { commentDatas } from '@/data/dummy/commentData';
import Comment from './Comment';

export default function GetComment(props: { commentData: CommentDataType }) {
  const commentData = props.commentData;
  return (
    <>
      {
        commentData &&
        commentData.data.map((parentsData) => (
          !parentsData.childId &&
          <Comment
            key={parentsData.commentId}
            commentData={parentsData}
          // isAuthor={isAuthor}
          />
        ))
      }
    </>
  )
}