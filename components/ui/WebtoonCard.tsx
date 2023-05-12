import React, { useState } from 'react'
import Image from 'next/image';

import style from '@/components/ui/WebtoonCard.module.css'
import { WebToonListDataType } from '@/types/webtoonDataType';

export default function WebtoonCard(props: {data: WebToonListDataType}) {

  const data = props.data;

  return (
    <div className={style.box}>
          <div
            className={style.imgBox}
            key={data.id}
            // onClick={() => router.push(`/webtoon/${data.id}`)}
          >
            {/* {
              router.pathname === '/best' &&
              <div className={style.rank}>
                {index + 1}
              </div>
            } */}
            <div className={style.contentBox}>
              <Image
                src={data.titleImg}
                alt={data.title}
                width={110}
                height={110}
                priority
              />
              <div className={style.contentWrap}>
                <div className={style.option}>
                  <div className={style.views}>
                    <Image
                      src={'/assets/images/icons/views.svg'}
                      alt={'조회 수'}
                      width={15}
                      height={15}
                    />
                    <p className={style.viewstxt}>{data.views}</p>
                  </div>
                  <div className={style.likes}>
                    <Image
                      src={'/assets/images/icons/likes.svg'}
                      alt={'좋아요 수'}
                      width={12}
                      height={12}
                    />
                    <p className={style.likestxt}>{data.likes}</p>
                  </div>
                </div>
                <p className={style.title}>{data.title}</p>
                <p className={style.author}>{data.author}</p>
              </div>
            </div>
          </div>
    </div>
  )
}
