import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/router';

import style from '@/components/ui/WebtoonCard.module.css'

export default function WebtoonCard(props: { rank: number, data: any }) {

  const router = useRouter();
  const query = router.query;
  const data = props.data;

  return (
    <div
      className={style.imgBox}
      onClick={() => router.push(`/webtoon/${data.webtoonId}`)}
    >
      {
        query.categoryName === 'best' ?
          <div className={style.rank}>
            {props.rank}
          </div>
          : ""
      }
      <div className={style.contentBox}>
        <div>
          <Image
            className={style.webtoonThumbnail}
            src={data.webtoonThumbnail}
            alt={data.webtoonTitle}
            width={110}
            height={110}
            priority
          />
        </div>
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
              <p className={style.likestxt}>{data.interestCount}</p>
            </div>
          </div>
          <p className={style.title}>{data.webtoonTitle}</p>
          <div className={style.author}>
            <p className={style.creator}>{data.creator}</p>
            {
              data.illustrator !== "" ?
                <p className={style.illustrator}>{data.illustrator}</p>
                : ""
            }
          </div>
        </div>
      </div>
    </div>
  )
}