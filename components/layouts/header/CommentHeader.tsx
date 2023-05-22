import React from 'react'

import BackBtn from '@/components/ui/BackBtn'
import style from '@/components/layouts/header/CommentHeader.module.css'
import { useRouter } from 'next/router'

export default function CommentHeader() {

  const { query } = useRouter();
  const webtoonName = query.webtoonName;
  const episodeId = query.episodeId;

  return (
    <header className={style.headerSection}>
      <div className={style.TotalHeader}>
        <div className={style.leftHead}>
          <BackBtn />
        </div>
        <div className={style.centerHead}>
          <p>{webtoonName} {episodeId}화</p>
        </div>
        <div className={style.rightHead}></div>
      </div>
    </header>
  )
}
