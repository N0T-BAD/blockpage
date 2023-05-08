import React, { useState } from 'react'
import Image from 'next/image';

import style from '@/components/ui/WebtoonCard.module.css'
import { listviewContentData } from '@/data/dummy/listviewData';
import { listviewDataType } from '@/types/listviewDataType';
import { useRouter } from 'next/router';
import LikeViewSection from './webtoonInfo/LikeViewSection';

export default function WebtoonCard() {

  const router = useRouter();
  const [listviewData] = useState<listviewDataType[]>(listviewContentData);

  return (
    <div className={style.box}>
      {
        listviewData &&
        listviewData.map((data, index) => (
          <div
            className={style.imgBox}
            key={data.id}
          >
            {
              router.pathname === '/best' &&
              <div className={style.rank}>
                {index + 1}
              </div>
            }
            <div className={style.contentBox}>
              <Image
                src={data.imgUrl}
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
        ))
      }
    </div>
  )
}
