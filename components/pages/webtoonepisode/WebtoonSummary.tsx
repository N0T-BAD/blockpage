import React, { useState } from 'react'

import style from '@/components/pages/webtoonepisode/WebtoonSummary.module.css'
import { WebtoonSummaryDataType } from '@/types/webtoonDataType';
import { webtoonSummaryData } from '@/data/dummy/webtoonData';

export default function WebtoonSummary() {

  const [close, setClose] = useState(true);
  const summaryData = useState<WebtoonSummaryDataType>(webtoonSummaryData);

  const handleClose = () => {
    setClose(!close);
  }

  return (
    <section className={style.webtoonSummarySection}>
      <div className={style.summaryHead}>
        <p>줄거리</p>
      </div>
      <div className={style.summary}>
        <p className={close ? `${style.close}` : ""}>{summaryData[0].summary}</p>
      </div>
      <div className={style.shadow}></div>
      <div className={style.summaryMore}>
        <p onClick={handleClose}>{close ? "더보기" : "간략히"}</p>
      </div>
    </section>
  )
}
