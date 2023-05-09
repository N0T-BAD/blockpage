import React, { Dispatch, SetStateAction } from 'react'

import style from '@/components/pages/webtoonepisode/WebtoonEpisodeSection.module.css'
import WebtoonSummary from './WebtoonSummary'
import Episode from './Episode'
import WebtoonState from './WebtoonState'
import { WebtoonInfoDataType } from '@/types/webtoonDataType'

export default function WebtoonEpisodeSection() {
  return (
    <section className={style.webtoonEpisodeSection}>
      <WebtoonSummary />
      <WebtoonState />
      <Episode />
    </section>
  )
}