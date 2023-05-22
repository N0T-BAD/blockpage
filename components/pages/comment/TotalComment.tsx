import React, { useState } from 'react'

import style from '@/components/pages/comment/CommentInput.module.css'

export default function TotalComment() {

  const [commentCnt, setCommentCnt] = useState(0);

  return (
    <p className={style.totalComment}>{commentCnt}개의 댓글</p>
  )
}
