import React from 'react'

import style from '@/components/pages/webtoonarchive/ArchiveDataSection.module.css'
import WebtoonList from '@/components/ui/WebtoonList';
import { listviewContentData } from '@/data/dummy/listviewData';

export default function ArchiveDataSection() {

  const listviewData = listviewContentData;
  console.log("ArchiveDataSection")

  return (
    <section className={style.archiveSection}>
      {
        listviewData &&
        listviewData.map((data) => (
          <WebtoonList
            key={data.id}
            data={data}
          />
        ))
      }
    </section>
  )
}
