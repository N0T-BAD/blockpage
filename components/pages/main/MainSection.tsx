import React from 'react'
import style from '@/components/pages/main/MainSection.module.css'
import MainTopBanner from './MainTopBanner'

export default function MainSection() {
  return (
    <section className={style.mainSection}>
      <MainTopBanner />
    </section>
  )
}
