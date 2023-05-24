import React from 'react'

import style from '@/components/pages/webtoonarchive/ArchiveDataSection.module.css'
import WebtoonList from '@/components/ui/WebtoonList';
import { listviewDataType } from '@/types/listviewDataType';

export default function ArchiveDataSection(props: { data: listviewDataType[] }) {

  const listviewData = props.data;

  return (
    <section className={style.archiveSection}>
      {
        listviewData &&
        listviewData.map((data) => (
          <WebtoonList
            key={data.webtoonId}
            data={data}
          />
        ))
      }
    </section>
  )
}
