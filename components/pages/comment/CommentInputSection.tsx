import React from 'react'

import style from '@/components/pages/comment/CommentInputSection.module.css'
import CommentInput from './CommentInput'
import TotalComment from './TotalComment'
import { CommentUserDataType } from '@/types/commentDataType'

export default function CommentInputSection(props: { nickNameData: CommentUserDataType }) {
  return (
    <section className={style.commentInputSection}>
      <TotalComment />
      <CommentInput nickNameData={props.nickNameData} />
    </section>
  )
}
