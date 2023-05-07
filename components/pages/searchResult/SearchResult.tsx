import React, { useState } from 'react'
import Image from 'next/image'

import style from '@/components/pages/searchResult/SearchResult.module.css'
import Separator from '@/components/ui/Separator'
import { listviewDataType } from '@/types/listviewDataType';
import { listviewContentData } from '@/data/dummy/listviewData';

export default function SearchResult() {

  const [listviewData] = useState<listviewDataType[]>(listviewContentData);

  return (
    <>
      {
        listviewData &&
        listviewData.map((data) => (
          <div key={data.id}>
            <div className={style.webtoonBox}>
              <div className={style.ImgWrap} >
                <Image src={data.imgUrl} alt={data.title} width={100} height={90} priority />
              </div>
              <div className={style.contentWrap} >
                <div className={style.option} >
                  <div className={style.views} >
                    <Image src={'/assets/images/icons/views.svg'} alt={'조회 수'} width={15} height={15} />
                    <p className={style.viewstxt} >{data.views}</p>
                  </div>
                  <div className={style.likes}>
                    <Image src={'/assets/images/icons/likes.svg'} alt={'좋아요 수'} width={12} height={12} />
                    <p className={style.likestxt} >{data.likes}</p>
                  </div>
                </div>
                <p className={style.title} >{data.title}</p>
                <p className={style.author} >{data.author}</p>
              </div>
            </div>
            <Separator color='var(--bp-gray)' gutter={0.5} />
          </div>
        ))
      }
    </>
  )
}
