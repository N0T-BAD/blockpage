import React from 'react'

import style from '@/components/pages/comment/GetCommentSection.module.css'
import GetComment from './GetComment'
import { CommentDataType } from '@/types/commentDataType'

export default function GetCommentSection(props: { commentData: CommentDataType[], nickNameData: string }) {
  return (
    <section className={style.getCommentSection}>
      <GetComment commentData={props.commentData} nickNameData={props.nickNameData} />
    </section>
  )
}
