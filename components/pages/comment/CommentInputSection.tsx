import React from 'react'

import style from '@/components/pages/comment/CommentInputSection.module.css'
import CommentInput from './CommentInput'
import TotalComment from './TotalComment'
import { userDataType } from '@/types/storeDataType'

export default function CommentInputSection(props: { userData: userDataType, count: number }) {
  return (
    <section className={style.commentInputSection}>
      <TotalComment count={props.count} />
      <CommentInput userData={props.userData} />
    </section>
  )
}
