import React from 'react'

import style from '@/components/pages/comment/CommentInput.module.css'

export default function TotalComment(props: { count: number }) {
  return (
    <p className={style.totalComment}>{props.count}개의 댓글</p>
  )
}
