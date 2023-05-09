import React from 'react'

import style from '@/components/pages/webtoonepisode/WebtoonEpisodeSection.module.css'
import WebtoonSummary from './WebtoonSummary'
import Episode from './Episode'

export default function WebtoonEpisodeSection() {
  return (
    <section className={style.webtoonEpisodeSection}>
      <WebtoonSummary />
      <Episode />
    </section>
  )
}