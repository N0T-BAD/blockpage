import React from 'react'

import { listviewDataType } from '@/types/listviewDataType';
import WebtoonList from '@/components/ui/WebtoonList';

export default function SearchResult(props: { searchData: listviewDataType[] }) {

  const listviewData = props.searchData;

  return (
    <>
      {
        listviewData &&
        listviewData.map((data) => (
          <WebtoonList
            data={data}
            key={data.webtoonId}
          />
        ))
      }
    </>
  )
}
