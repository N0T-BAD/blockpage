import React from 'react'

import style from '@/components/pages/webtoonepisode/WebtoonInfoSection.module.css'
import WebtoonInfo from './WebtoonInfo'
import { WebToonListDataType } from '@/types/webtoonDataType'

export default function WebtoonInfoSection(props: { data: WebToonListDataType }) {
  return (
    <section className={style.webtoonInfoSection}>
      <WebtoonInfo data={props.data} />
    </section>
  )
}