import React from 'react'

import style from '@/components/pages/comment/CommentInputSection.module.css'
import CommentInput from './CommentInput'
import TotalComment from './TotalComment'

export default function CommentInputSection(props: { nickNameData: string, count: number }) {
  return (
    <section className={style.commentInputSection}>
      <TotalComment count={props.count} />
      <CommentInput nickNameData={props.nickNameData} />
    </section>
  )
}
