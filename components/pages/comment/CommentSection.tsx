import React from 'react'

import style from '@/components/pages/comment/CommentSection.module.css'
import CommentHeader from './CommentHeader'

export default function CommentSection() {
  return (
    <section className={style.commentSection}>
      <CommentHeader />
    </section>
  )
}
