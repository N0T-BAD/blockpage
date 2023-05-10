import React, { useState } from 'react'
import { useRouter } from 'next/router';

import { episodeListData } from '@/data/dummy/webtoonData';
import { EpisodeDataType } from '@/types/webtoonDataType';
import Separator from '@/components/ui/Separator';
import Episode from './Episode';

export default function EpisodeSection() {
  const router = useRouter();
  const [episode] = useState<EpisodeDataType[]>(episodeListData);

  return (
    <>
      {
        episode &&
        episode.map((data) => (
          <section key={data.id} onClick={() => router.push(`/episode/${data.id}`)}>
            <Episode
              id={data.id}
              subject={data.subject}
              imgUrl={data.imgUrl}
              rating={data.rating}
              date={data.date}
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
