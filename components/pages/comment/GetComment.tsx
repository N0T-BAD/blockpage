import Image from 'next/image'
import React, { useState } from 'react'

import style from '@/components/pages/comment/GetComment.module.css'
import { commentDataType } from '@/types/commentDataType';
import { commentDatas } from '@/data/dummy/commentData';
import ReplyComment from './ReplyComment';
import Comment from './Comment';

export default function GetComment(props: { episodeId: number, }) {

  const [commentData] = useState<commentDataType[]>(commentDatas);
  const [openReply, setOpenReply] = useState(false);
  const [isAuthor] = useState(false);

  const handlePush = () => {
    console.log("handlePush onClick");
  }

  const handleDelete = () => {
    console.log("handleDelete onClick");
  }

  const handleLike = () => {
    console.log("handleLike onClick");
  }

  const handleDislike = () => {
    console.log("handleDislike onClick");
  }

  const handleView = () => {
    setOpenReply(!openReply);
  }

  const handleReport = () => {
    //신고
    console.log("handleDeclaration onClick");
  }

  return (
    <>
      {
        commentData &&
        commentData.map((data, idx) => (
          !data.childId &&
          <div key={idx}>
            <Comment
              data={data}
              isAuthor={isAuthor}
              handlePush={handlePush}
              handleDelete={handleDelete}
              handleLike={handleLike}
              handleDislike={handleDislike}
              handleView={handleView}
              handleReport={handleReport}
            />
          </div>
        ))
      }
      {
        openReply ?
          <ReplyComment
            data={commentData}
            isAuthor={isAuthor}
            handlePush={handlePush}
            handleDelete={handleDelete}
            handleLike={handleLike}
            handleDislike={handleDislike}
            handleReport={handleReport}
          />
          : ""
      }
    </>
  )
}