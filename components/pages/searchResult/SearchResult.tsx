import React, { useState } from 'react'

import { listviewDataType } from '@/types/listviewDataType';
import { listviewContentData } from '@/data/dummy/listviewData';
import WebtoonList from '@/components/ui/WebtoonList';

export default function SearchResult() {

  const [listviewData] = useState<listviewDataType[]>(listviewContentData);

  return (
    <>
      {
        listviewData &&
        listviewData.map((data) => (
          <WebtoonList
            data={data}
            key={data.id}
          />
        ))
      }
    </>
  )
}
