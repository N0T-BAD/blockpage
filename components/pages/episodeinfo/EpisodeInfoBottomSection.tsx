import React from 'react'
import EpisodeInfoForm from '@/components/pages/episodeinfo/EpisodeInfoForm'
import style from '@/components/pages/episodeinfo/EpisodeInfoBottomSection.module.css'
import { EpisodeViewListType, WebToonListDataType } from '@/types/webtoonDataType';

interface EpisodeInfoBottomSectionProps {
  webtoonId: number;
}


export default function EpisodeInfoBottomSection({ webtoonId }: EpisodeInfoBottomSectionProps) {

  return (
    <section className={style.EpisodeInfoBottomSection}>
      <EpisodeInfoForm webtoonId={webtoonId} />
    </section>
  )
}
