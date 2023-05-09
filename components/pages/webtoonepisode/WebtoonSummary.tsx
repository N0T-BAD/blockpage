import React from 'react'

import style from '@/components/pages/webtoonepisode/WebtoonSummary.module.css'

export default function WebtoonSummary() {
  return (
    <section className={style.webtoonSummarySection}>
      <div className={style.summaryHead}>
        <p>줄거리</p>
      </div>
      <div className={style.summary}>
        <p>사랑하던 사람이 갑자기 세상을 떠난 후 상실감과 죄책감으로 하루하루 살아가던 세화. 자신의 이름과 같은 세화사에서 진행</p>
      </div>
      <div className={style.summaryMore}>
        <p>더 보기</p>
      </div>
    </section>
  )
}
