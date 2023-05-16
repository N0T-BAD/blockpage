import React from 'react'

import style from '@/components/pages/webtoonepisode/WebtoonEpisodeSection.module.css'
import WebtoonSummary from './WebtoonSummary'
import WebtoonState from './WebtoonState'
import EpisodeSection from './EpisodeSection'
import { WebToonListDataType } from '@/types/webtoonDataType'

export default function WebtoonEpisodeSection(props: { data: WebToonListDataType }) {
  return (
    <section className={style.webtoonEpisodeSection}>
      <WebtoonSummary summary={props.data.summary} />
      <WebtoonState state={props.data.state} />
      <EpisodeSection episodeData={props.data.episodeData} />
    </section>
  )
}