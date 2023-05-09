import React from 'react'

import style from '@/components/pages/webtoonepisode/WebtoonInfoSection.module.css'
import WebtoonInfo from './WebtoonInfo'

export default function WebtoonInfoSection() {
  return (
    <section className={style.webtoonInfoSection}>
      <WebtoonInfo />
    </section>
  )
}