import React, { useState } from 'react'

import { listviewDataType } from '@/types/listviewDataType';
import { searchResultListContentData } from '@/data/dummy/listviewData';
import WebtoonList from '@/components/ui/WebtoonList';

export default function SearchResult() {

  const [listviewData] = useState<listviewDataType[]>(searchResultListContentData);

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
