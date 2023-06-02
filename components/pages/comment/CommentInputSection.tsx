import React from 'react'

import style from '@/components/pages/comment/CommentInputSection.module.css'
import CommentInput from './CommentInput'
import TotalComment from './TotalComment'

export default function CommentInputSection(props: { nickNameData: string }) {
  return (
    <section className={style.commentInputSection}>
      <TotalComment />
      <CommentInput nickNameData={props.nickNameData} />
    </section>
  )
}
