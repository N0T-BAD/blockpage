import React from 'react'
import EpisodeInfoForm from '@/components/pages/episodeinfo/EpisodeInfoForm'
import style from '@/components/pages/episodeinfo/EpisodeInfoBottomSection.module.css'
import { EpisodeViewListType, WebToonListDataType } from '@/types/webtoonDataType';

interface EpisodeInfoProps {
  episodeData: EpisodeViewListType;
  webtoonId: number;
}

export default function EpisodeInfoBottomSection({ episodeData, webtoonId }: EpisodeInfoProps) {

  return (
    <section className={style.EpisodeInfoBottomSection}>
      <EpisodeInfoForm episodeData={episodeData} webtoonId={webtoonId} />
    </section>
  )
}
