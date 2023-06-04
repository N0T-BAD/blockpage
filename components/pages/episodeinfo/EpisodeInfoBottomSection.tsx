import React from 'react'
import EpisodeInfoForm from '@/components/pages/episodeinfo/EpisodeInfoForm'
import style from '@/components/pages/episodeinfo/EpisodeInfoBottomSection.module.css'
import { EpisodeViewListType, WebToonListDataType } from '@/types/webtoonDataType';

export default function EpisodeInfoBottomSection() {

  return (
    <section className={style.EpisodeInfoBottomSection}>
      <EpisodeInfoForm />
    </section>
  )
}
