import Image from 'next/image'
import React from 'react'

export default function EpisodeViewer() {

  return (
    <>
      <Image
        src={"/assets/dummy/webtoonView/episode1.svg"}
        alt='episode'
        width={390}
        height={7500}
      />
    </>
  )
}
