import React, { useState } from 'react'

import Image from 'next/image'
import { useRouter } from 'next/router'

import style from '@/components/pages/episodeviewer/FooterViewer.module.css'
import BackBtn from '@/components/ui/BackBtn';
import CloseBtn from '@/components/ui/CloseBtn';
import Episode from '../webtoonepisode/Episode';
import { EpisodeDataType } from '@/types/webtoonDataType';
import { episodeData } from '@/data/dummy/webtoonData';

export default function FooterViewer() {

  const router = useRouter();
  const data = useState<EpisodeDataType>(episodeData);

  return (
    <footer className={style.viewerFooterWrap}>
      <div className={style.top}>
        <div className={style.ratingBtn}>
          <p>★</p>
          <p>9.99</p>
          <p>별점주기</p>
        </div>
        <div>
          <CloseBtn />
        </div>
      </div>
      <div className={style.authorSection}>
        <div className={style.authorMent}>
          <p>작가의 말</p>
          <p>한혜연</p>
        </div>
        <div className={style.authorComment}>
          <p>반갑습니다. 많은 응원을 부탁해요~!</p>
        </div>
      </div>
      <div className={style.nextEpisode}>
        <Episode
          id={data[0].id}
          subject={data[0].subject}
          imgUrl={data[0].imgUrl}
          rating={data[0].rating}
          date={data[0].date}
        />
      </div>
      <div className={style.navFoot}>
        <div className={style.backBtn}>
          <BackBtn />
        </div>
        <div className={style.commentBtn}>
          <Image
            src={'/assets/images/icons/comment.svg'}
            alt="commentBtnIcon"
            width={30}
            height={25}
            priority
            onClick={() => router.push("/comment")}
          />
        </div>
        <div className={style.listBtn}>
          <Image
            src={'/assets/images/icons/list.svg'}
            alt="listBtnIcon"
            width={25}
            height={22}
            priority
            onClick={() => router.push("/webtoonepisodelist")}
          />
        </div>
      </div>
    </footer>
  )
}
