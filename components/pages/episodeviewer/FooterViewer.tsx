import React, { useState } from 'react'

import Image from 'next/image'
import { useRouter } from 'next/router'

import style from '@/components/pages/episodeviewer/FooterViewer.module.css'
import BackBtn from '@/components/ui/BackBtn';
import CloseBtn from '@/components/ui/CloseBtn';
import Episode from '../webtoonepisode/Episode';
import { EpisodeListDataType, WebToonListDataType } from '@/types/webtoonDataType';

export default function FooterViewer(props: { episodeData: EpisodeListDataType, dummyData: WebToonListDataType[] }) {

  const router = useRouter();
  const { webtoonName } = router.query;
  const { episodeId } = router.query;

  const nextEpisodeId = Number(episodeId) + 1;

  const [viewMore, setViewMore] = useState(false);

  const webtoonData = props.dummyData.find((item) => item.title === webtoonName);
  const lastEpisodeId = webtoonData?.episodeData.length;
  const nextEpisodeData = webtoonData?.episodeData.find((item) => item.id === nextEpisodeId);

  const handleRating = () => {
    //modal
  }

  return (
    <footer className={
      !viewMore ?
        `${style.viewerFooterWrap} ${style.footerHidden}`
        : nextEpisodeData ? `${style.viewerFooterWrap}`
          : `${style.viewerFooterWrap} ${style.hidden}`
    }>
      {
        viewMore &&
        <>
          <div className={style.top}>
            <div className={style.ratingBtn} onClick={handleRating}>
              <p>★</p>
              <p>{props.episodeData.rating}</p>
              <p>별점주기</p>
            </div>
            <div className={style.close}>
              <CloseBtn />
            </div>
          </div>
          <div className={style.authorSection}>
            <div className={style.authorMent}>
              <p>작가의 말</p>
              <p>{webtoonData && webtoonData?.author}</p>
            </div>
            <div className={style.authorComment}>
              <p>{props.episodeData.authorComment}</p>
            </div>
          </div>
          {
            nextEpisodeData &&
            <div
              className={style.nextEpisode}
              onClick={() => router.push(`/webtoon/${webtoonName}/episode/${nextEpisodeId}`)}
            >
              <p className={style.nextTxt}>다음화</p>
              <Episode
                id={nextEpisodeData.id}
                subject={nextEpisodeData.subject}
                thumbnail={nextEpisodeData.thumbnail}
                rating={nextEpisodeData.rating}
                date={nextEpisodeData.date}
              />
            </div>
          }
        </>
      }
      <div className={style.navFoot}>
        <div className={style.backBtn}>
          <BackBtn />
        </div>
        <div className={style.commentBtn} onClick={() => router.push(`/webtoon/${webtoonName}/episode/${episodeId}/comment`)}>
          <Image
            src={'/assets/images/icons/comment.svg'}
            alt="commentBtnIcon"
            width={30}
            height={25}
            priority
          />
        </div>
        <div className={style.listBtn} onClick={() => router.push(`/webtoon/${webtoonName}`)}>
          <Image
            src={'/assets/images/icons/list.svg'}
            alt="listBtnIcon"
            width={25}
            height={22}
            priority
          />
        </div>
      </div>
    </footer >
  )
}
