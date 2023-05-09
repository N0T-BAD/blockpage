import React, { useState } from 'react'

import style from '@/components/pages/webtoonepisode/WebtoonSummary.module.css'
import { WebtoonSummaryDataType } from '@/types/webtoonDataType';
import { webtoonSummaryData } from '@/data/dummy/webtoonData';

export default function WebtoonSummary() {

  const summaryData = useState<WebtoonSummaryDataType>(webtoonSummaryData);

  return (
    <section className={style.webtoonSummarySection}>
      <div className={style.summaryHead}>
        <p>줄거리</p>
      </div>
      <div className={style.summary}>
        <p>{summaryData[0].summary}</p>
      </div>
      <div className={style.summaryMore}>
        <p>더 보기</p>
      </div>
    </section>
  )
}
