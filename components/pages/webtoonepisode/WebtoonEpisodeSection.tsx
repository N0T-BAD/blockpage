import React from 'react'

import style from '@/components/pages/webtoonepisode/WebtoonEpisodeSection.module.css'
import WebtoonSummary from './WebtoonSummary'
import EpisodeSection from './EpisodeSection'
import { WebToonListDataType } from '@/types/webtoonDataType'

export default function WebtoonEpisodeSection(props: { data: WebToonListDataType }) {

  const data = props.data.data;

  return (
    <section className={style.webtoonEpisodeSection}>
      <WebtoonSummary summary={data.description} />
      {/* <WebtoonState state={data.state} /> */}
      <EpisodeSection episodeViewList={data.episodeViewList} />
    </section>
  )
}