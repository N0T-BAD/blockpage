import React from 'react'

import style from '@/components/pages/comment/GetCommentSection.module.css'
import GetComment from './GetComment'
import { CommentDataType } from '@/types/commentDataType'
import { userDataType } from '@/types/storeDataType'

export default function GetCommentSection(props: { commentData: CommentDataType[], userData: userDataType }) {
  return (
    <section className={style.getCommentSection}>
      <GetComment commentData={props.commentData} userData={props.userData} />
    </section>
  )
}
