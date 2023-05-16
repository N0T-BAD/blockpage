import React from 'react'
import style from '@/components/pages/listview/ListviewSection.module.css'
import WebtoonCard from '@/components/ui/WebtoonCard'
import { WebToonListDataType } from '@/types/webtoonDataType'

export default function ListviewSection(props: { data: WebToonListDataType[] }) {

  const data = props.data;
  return (
    <section className={style.listviewSection}>
      <div className={style.CradWrap}>
        {
          data.map((item: WebToonListDataType, index) => (
            <WebtoonCard key={item.id} rank={index + 1} data={item} />
          ))
        }
      </div>
    </section>
  )
}