import React from 'react'
import style from '@/components/pages/listview/ListviewSection.module.css'
import WebtoonCard from '@/components/ui/WebtoonCard'
import { webtoonListGetDataType } from '@/types/webtoonDataType'

export default function ListviewSection(props: { data: webtoonListGetDataType[] }) {

  const data = props.data;
  return (
    <section className={style.listviewSection}>
      <div className={style.CradWrap}>
        {
          data.map((item: webtoonListGetDataType, index) => (
            <WebtoonCard key={item.webtoonId} rank={index + 1} data={item} />
          ))
        }
      </div>
    </section>
  )
}