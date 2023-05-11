import React from 'react'

import style from '@/components/pages/comment/CommentInputSection.module.css'
import CommentInput from './CommentInput'

export default function CommentInputSection() {
  return (
    <section className={style.commentInputSection}>
      <CommentInput />
    </section>
  )
}
