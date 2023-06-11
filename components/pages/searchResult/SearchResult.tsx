import React from 'react'

import style from '@/components/pages/searchResult/SearchResult.module.css'

import { listviewDataType } from '@/types/listviewDataType';
import WebtoonList from '@/components/ui/WebtoonList';
import { useRouter } from 'next/router';

export default function SearchResult(props: { searchData: listviewDataType[] }) {

  const router = useRouter();
  const { searchKeyword } = router.query;
  const listviewData = props.searchData;

  return (
    <>
      <div className={style.searchResultTxt}>
        <p>{searchKeyword}의 검색결과
          {
            listviewData.length ?
              "" :
              `가 없습니다.`
          }
        </p>
      </div>
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
