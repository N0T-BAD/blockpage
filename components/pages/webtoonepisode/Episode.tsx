import React, { useState } from 'react'

import style from '@/components/pages/webtoonepisode/Episode.module.css'
import Separator from '@/components/ui/Separator'
import Image from 'next/image'
import { EpisodeDataType } from '@/types/webtoonDataType';
import { episodeData } from '@/data/dummy/webtoonData';

export default function Episode() {

  const [episode] = useState<EpisodeDataType[]>(episodeData);

  return (
    <>
      {
        episode &&
        episode.map((data) => (
          <section className={style.episodeSection} key={data.id}>
            <div className={style.episode}>
              <div className={style.episodeImg}>
                <Image
                  src={data.imgUrl}
                  alt='에피소드 썸네일'
                  width={120}
                  height={70}
                  priority
                />
              </div>
              <div className={style.episodeContents}>
                <p className={style.subject}>{data.subject}</p>
                <div className={style.episodeOption}>
                  <p className={style.rating}>평점 {data.rating}</p>
                  <p className={style.date}>{data.date}</p>
                </div>
              </div>
            </div>
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
