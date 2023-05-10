import React from 'react'

import style from '@/components/pages/webtoonepisode/WebtoonEpisodeSection.module.css'
import WebtoonSummary from './WebtoonSummary'
import WebtoonState from './WebtoonState'
import EpisodeSection from './EpisodeSection'

export default function WebtoonEpisodeSection() {
  return (
    <section className={style.webtoonEpisodeSection}>
      <WebtoonSummary />
      <WebtoonState />
      <EpisodeSection />
    </section>
  )
}