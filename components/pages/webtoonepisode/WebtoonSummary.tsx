import React, { useState } from 'react'

import style from '@/components/pages/webtoonepisode/WebtoonSummary.module.css'

export default function WebtoonSummary(props: { summary: string }) {

  const [close, setClose] = useState(true);

  const handleClose = () => {
    setClose(!close);
  }

  return (
    <section className={style.webtoonSummarySection}>
      <div className={style.summaryHead}>
        <p>줄거리</p>
      </div>
      <div className={style.summary}>
        <p className={close ? `${style.close}` : ""}>{props.summary}</p>
      </div>
      <div className={style.shadow}></div>
      <div className={style.summaryMore}>
        <p onClick={handleClose}>{close ? "더보기" : "간략히"}</p>
      </div>
    </section>
  )
}
