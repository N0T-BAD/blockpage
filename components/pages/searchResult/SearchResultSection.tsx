import React from 'react'

import SearchResult from './SearchResult'
import style from '@/components/pages/searchResult/SearchResultSection.module.css'
import { listviewDataType } from '@/types/listviewDataType'

export default function SearchResultSection(props: { searchData: listviewDataType[] }) {
  return (
    <section className={style.resultSection}>
      <SearchResult searchData={props.searchData} />
    </section>
  )
}