import React from 'react'

import SearchResult from './SearchResult'
import style from '@/components/pages/searchResult/SearchResultSection.module.css'

export default function SearchResultSection() {
  return (
    <section className={style.resultSection}>
      <SearchResult />
    </section>
  )
}