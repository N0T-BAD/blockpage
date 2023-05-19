import React, { useState } from 'react'

import { commentDataType } from '@/types/commentDataType';
import { commentDatas } from '@/data/dummy/commentData';
import Comment from './Comment';

export default function GetComment() {

  const [commentData] = useState<commentDataType[]>(commentDatas);
  const [isAuthor] = useState(false);

  return (
    <>
      {
        commentData &&
        commentData.map((parentsData) => (
          !parentsData.childId &&
          <Comment
            key={parentsData.id}
            data={parentsData}
            isAuthor={isAuthor}
          />
        ))
      }
    </>
  )
}