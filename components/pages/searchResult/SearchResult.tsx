import React, { useEffect, useState } from 'react'

import { listviewDataType } from '@/types/listviewDataType';
import { searchResultListContentData } from '@/data/dummy/listviewData';
import WebtoonList from '@/components/ui/WebtoonList';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function SearchResult() {

  const [listviewData] = useState<listviewDataType[]>(searchResultListContentData);

  const router = useRouter();
  const { creator } = router.query;
  const { illustrator } = router.query;
  const { title } = router.query;

  useEffect(() => {
    axios.get(`https://blockpage.site/webtoon-service/v1/webtoons/search?creator=?&illustrator=?&title=?`, {
      params: {
        creator: creator,
        illustrator: illustrator,
        title: title,
      }
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

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
