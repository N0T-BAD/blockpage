import Image from 'next/image'
import React from 'react'

import { EpisodeViewDataType, ImagesType } from '@/types/webtoonDataType'
import style from '@/components/pages/episodeviewer/EpisodeViewer.module.css'

export default function EpisodeViewer(props: { episodeData: EpisodeViewDataType }) {
  const data = props.episodeData.data;
  return (
    <section className={style.viewer}>
      {
        data.images.map((item: ImagesType, index) => (
          <div className={style.episodeImg} key={index}>
            <Image
              src={item.imageUrl}
              alt={`episode image ${index}`}
              width={390}
              height={500}
              priority
            />
          </div>
        ))
      }
    </section>
  )
}
