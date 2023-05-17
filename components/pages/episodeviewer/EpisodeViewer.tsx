import { EpisodeListDataType } from '@/types/webtoonDataType'
import Image from 'next/image'
import React from 'react'

export default function EpisodeViewer(props: { data: EpisodeListDataType }) {
  return (
    <>
      {
        props.data.imgUrls.map((item) => (
          <Image
            key={item.id}
            src={item.imgUrl}
            alt='episode'
            width={390}
            height={7500}
          />
        ))
      }
    </>
  )
}
