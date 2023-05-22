import React from 'react'
import { useRouter } from 'next/router';

import { EpisodeListDataType } from '@/types/webtoonDataType';
import Separator from '@/components/ui/Separator';
import Episode from './Episode';

export default function EpisodeSection(props: { title: string, episodeData: EpisodeListDataType[] }) {

  const router = useRouter();

  return (
    <>
      {
        props.episodeData &&
        props.episodeData.map((item) => (
          <section key={item.id} onClick={() => router.push(`/webtoon/${props.title}/episode/${item.id}`)}>
            <Episode
              id={item.id}
              subject={item.subject}
              thumbnail={item.thumbnail}
              rating={item.rating}
              date={item.date}
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
