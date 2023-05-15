import React from 'react'

import style from '@/components/pages/comment/GetComment.module.css'
import { commentDataType } from '@/types/commentDataType'
import Comment from './Comment'

export default function ReplyComment(props: {
  data: commentDataType[],
  isAuthor: boolean,
  handlePush: () => void,
  handleDelete: () => void,
  handleLike: () => void,
  handleDislike: () => void,
  handleReport: () => void,
}) {
  console.log(props.data);
  return (
    <>
      {
        <div className={style.replySection}>
          {
            props.data &&
            props.data.map((item, idx) => (
              item.childId &&
                item.childId > 0 ?
                <Comment
                  key={idx}
                  data={item}
                  isAuthor={props.isAuthor}
                  handlePush={props.handlePush}
                  handleDelete={props.handleDelete}
                  handleLike={props.handleLike}
                  handleDislike={props.handleDislike}
                  handleReport={props.handleReport}
                /> : ""
            ))
          }
        </div>
      }
    </>
  )
}
