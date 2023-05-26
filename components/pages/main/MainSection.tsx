import React from 'react'
import style from '@/components/pages/main/MainSection.module.css'
import { MainBannerType } from '@/types/mainBannerType'
import Image from 'next/image'
import MainTopBanner from './MainTopBanner'
import MainBanner from './MainBanner'

export default function MainSection(props: { data: MainBannerType }) {
  const data = props.data

  return (
    <section className={style.mainSection}>
      {/* <MainTopBanner /> */}
      <MainBanner />
    </section>
  )
}
