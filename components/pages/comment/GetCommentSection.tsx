import React from 'react'

import style from '@/components/pages/comment/GetCommentSection.module.css'
import GetComment from './GetComment'
import Separator from '@/components/ui/Separator'

export default function GetCommentSection() {
  return (
    <section className={style.getCommentSection}>
      <GetComment
        episodeId={1}
      />

    </section>
  )
}
