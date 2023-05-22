import React, { useEffect, useState } from 'react'
import { mainEventBannerData } from '@/data/dummy/mainEventBannerData'
import { MainBannerType } from '@/types/mainBannerType'
import style from '@/components/pages/main/MainTopBanner.module.css'
import Image from 'next/image'

export default function MainTopBanner() {
  const [data, setData] = useState<MainBannerType>()
  useEffect(() => {
    let randomNumber: number = 0
    randomNumber = Math.floor(Math.random() * mainEventBannerData.length)
    setData(mainEventBannerData[randomNumber])
  }, [])
  return (
    <div className={style.bannerWrap}>
      {
        data &&
        <>
          <div className={style.bannerImg}>
            <Image src={data.imgUrl} alt={data.name} width={600} height={600} priority />
          </div>
          <h2>{data.eventTitle}</h2>
          <div className={style.line}></div>
          <p>{data.name}</p>
          <p className={style.option}>{data.categoryName}</p>
        </>
      }
    </div>
  )
}
