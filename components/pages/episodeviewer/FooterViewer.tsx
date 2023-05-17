import React from 'react'

import Image from 'next/image'
import { useRouter } from 'next/router'

import style from '@/components/pages/episodeviewer/FooterViewer.module.css'
import BackBtn from '@/components/ui/BackBtn';
import CloseBtn from '@/components/ui/CloseBtn';
import Episode from '../webtoonepisode/Episode';
import { EpisodeListDataType } from '@/types/webtoonDataType';

export default function FooterViewer(props: { data: EpisodeListDataType }) {

  const router = useRouter();

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
          id={props.data.id}
          subject={props.data.subject}
          thumbnail={props.data.thumbnail}
          rating={props.data.rating}
          date={props.data.date}
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
