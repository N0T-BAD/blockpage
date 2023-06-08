import React, { useEffect, useState } from 'react'
import style from '@/components/pages/main/best/BestRankingCard.module.css'
import Image from 'next/image'
import { bestRankingData } from '@/data/bestRankingData';
import { BestRankingDataType } from '@/types/bestRankingDataType';
import axios from 'axios';
import { useRouter } from 'next/router';
import { categoryMenuData } from '@/data/staticMenuData';
import { useSession } from 'next-auth/react';

export default function BestRankingCard() {

  const router = useRouter();
  const [Weeksdata, setWeeksData] = useState<BestRankingDataType>(
    {
      data: [{
        webtoonId: 0,
        webtoonTitle: '',
        creator: '',
        illustrator: '',
        views: 0,
        interestCount: 0,
        webtoonThumbnail: '',
        genre: 0,
        cutoutImage: '',
      }]
    }
  );
  const [active, setActive] = useState(0);
  const { data: session } = useSession();
  const [defaultActive] = useState(0);
  const week = categoryMenuData.map((data) => data.id).find((data) => data === active) || defaultActive;

  useEffect(() => {
    axios.get(`https://blockpage.site/webtoon-service/v1/webtoons?weekdays=${week}&best=0`, {
      headers: {
        'Content-Type': 'application/json',
        memberId: session?.email,
        // role: role,
      },
    })
      .then((res) => {
        console.log(res)
        setWeeksData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const handler = (webtoonId: number) => {
    router.push(`/webtoon/${webtoonId}`)
  }

  const handleMainCategory = (weekdays: number) => {
    setActive(weekdays);
    console.log(weekdays)

    axios.get(`https://blockpage.site/webtoon-service/v1/webtoons?weekdays=${weekdays}&best=0`, {
      headers: {
        'Content-Type': 'application/json',
        memberId: session?.email,
        // role: role,
      },
    })
      .then((res) => {
        console.log(res)
        setWeeksData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const getGenreTypeString = (genre: number) => {
    if (genre === 0) {
      return "판타지 드라마"
    } else if (genre === 1) {
      return "로맨스"
    } else if (genre === 2) {
      return "판타지"
    } else if (genre === 3) {
      return "로맨스 판타지"
    } else if (genre === 4) {
      return "액션"
    } else if (genre === 5) {
      return "드라마"
    } else if (genre === 6) {
      return "공포"
    } else if (genre === 7) {
      return "코믹"
    }
  }

  return (
    <>
      <p className={style.daysTitle}>요일별 웹툰</p>
      <div className={style.categoryRow}>
        {categoryMenuData.map((data) => (
          <div className={data.id === (active || defaultActive) ? `${style.activeitem}` : `${style.item}`} key={data.id} onClick={() => handleMainCategory(data.id)}>
            <p>{data.name}</p>
          </div>
        ))}
      </div>

      {categoryMenuData.map((data) => (
        <div className={data.id === active ? `${style.Clickactive}` : `${style.NoClickactive}`} key={data.id}>
          {
            Weeksdata.data.map((data, index) => (
              <div className={style.BestRankingCard} key={data.webtoonId} onClick={() => handler(data.webtoonId)}>
                <div className={style.contentWrap}>
                  <div className={style.option}>
                    <div className={style.views}>
                      <Image src={'/assets/images/icons/views.svg'} alt={'조회 수'} width={15} height={15} priority />
                      <p className={style.viewstxt}>{data.views}</p>
                    </div>
                    <div className={style.likes}>
                      <Image src={'/assets/images/icons/likes.svg'} alt={'좋아요 수'} width={12} height={12} priority />
                      <p className={style.likestxt}>{data.interestCount}</p>
                    </div>
                  </div>
                  <p className={style.title}>{data.webtoonTitle}</p>
                  {data.illustrator ?
                    <p className={style.author}>{data.creator} / {data.illustrator}</p>
                    : <p className={style.author}>{data.creator}</p>
                  }
                  <p className={style.option2}>{getGenreTypeString(data.genre)}</p>
                </div>
                <div className={style.bestimg_1}>
                  <div className={style.imgbox}>
                    <Image src={data.webtoonThumbnail} alt={"베스트 이미지"} width={190} height={170} priority />
                  </div>
                  <div className={style.bgtxt}>{index + 1}</div>
                </div>
              </div>
            ))
          }
        </div>
      ))}
    </>
  )
}