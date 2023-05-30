import React, { useEffect, useState } from 'react'

import style from '@/components/pages/listview/ListviewSection.module.css'
import WebtoonCard from '@/components/ui/WebtoonCard'
import { WebToonListDataType, webtoonListGetDataType } from '@/types/webtoonDataType'
import { useRouter } from 'next/router';

export default function ListviewSection(props: { data: webtoonListGetDataType }) {

  const router = useRouter();

  const data = props.data.data;
  console.log(router.query.categoryName)

  return (
    <section className={router.query.categoryName !== 'best' ? `${style.listviewSection} ${style.listviewMargin} ` : `${style.listviewSection}`}>
      <div className={style.CardWrap}>
        {
          data &&
          data.map((item, index) => (
            <WebtoonCard key={item.webtoonId} rank={index + 1} data={item} />
          ))
        }
      </div>
    </section >
  )
}