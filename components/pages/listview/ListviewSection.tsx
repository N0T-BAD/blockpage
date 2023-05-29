import React from 'react'

import style from '@/components/pages/listview/ListviewSection.module.css'
import WebtoonCard from '@/components/ui/WebtoonCard'
import { WebToonListDataType } from '@/types/webtoonDataType'
import { useRouter } from 'next/router';

export default function ListviewSection(props: { data: WebToonListDataType[] }) {

  const data = props.data;
  const router = useRouter();

  console.log(router.query.categoryName)

  return (
    <section className={router.query.categoryName === 'week' ? `${style.listviewSection} ${style.listviewMargin} ` : `${style.listviewSection}`}>
      <div className={style.CardWrap}>
        {
          data.map((item: WebToonListDataType, index) => (
            <WebtoonCard key={item.id} rank={index + 1} data={item} />
          ))
        }
      </div>
    </section >
  )
}