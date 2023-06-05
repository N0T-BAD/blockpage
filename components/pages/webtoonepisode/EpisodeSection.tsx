import React from 'react'
import { useRouter } from 'next/router';

import { EpisodeListDataType, EpisodeViewListType } from '@/types/webtoonDataType';
import Separator from '@/components/ui/Separator';
import Episode from './Episode';

export default function EpisodeSection(props: { episodeViewList: EpisodeViewListType[] }) {

  const router = useRouter();
  const { webtoonId } = router.query;
  const data = props.episodeViewList;

  return (
    <>
      {
        data &&
        data.map((item) => (
          <section key={item.episodeNumber} onClick={() => router.push(`/webtoon/${webtoonId}/episode/${item.episodeId}/episode/${item.episodeNumber}`)}>
            <Episode
              id={item.episodeNumber}
              subject={item.episodeTitle}
              thumbnail={item.episodeThumbnail}
              rating={item.rating}
              uploadDate={item.uploadDate}
            />
            <Separator
              color='var(--bp-line-gray)'
              gutter={1}
            />
          </section>
        ))
      }
    </>
  )
}
