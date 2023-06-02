import React from 'react'
import { useRouter } from 'next/router'

import style from '@/components/layouts/header/CommentHeader.module.css'
import BackBtn from '@/components/ui/BackBtn'

export default function CommentHeader() {

  const { query, back } = useRouter();
  const episodeNumber = query.episodeNumber;

  return (
    <header className={style.headerSection}>
      <div className={style.TotalHeader}>
        <div className={style.leftHead}>
          <BackBtn
            onClick={() => back()}
          />
        </div>
        <div className={style.centerHead}>
          <p>{episodeNumber}화</p>
        </div>
        <div className={style.rightHead}></div>
      </div>
    </header>
  )
}
