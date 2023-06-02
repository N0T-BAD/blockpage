import Image from 'next/image';
import React from 'react';
import style from '@/components/pages/authorworkslist/AuthorSubCategory.module.css';
import { useRouter } from 'next/router';
import { EpisodeViewListType, WebToonListDataType } from '@/types/webtoonDataType';

interface EpisodeMiddleSectionProps {
  episodeData: WebToonListDataType;
}

export default function EpisodelistBox({ episodeData }: EpisodeMiddleSectionProps) {

  const router = useRouter();

  const handleDeleteClick = (episodeId: number) => {
    router.push(`/epdisodedelete/${episodeId}`);
  };

  return (
    <>
      {/* && Array.isArray(episodeData.data.episodeViewList) */}
      {episodeData.data && episodeData.data.episodeViewList ? (
        episodeData.data.episodeViewList.map((episodeData) => (
          <div className={style.webtoonBox} key={episodeData.episodeId}>
            <div className={style.webtoonInfoWrap}>
              <div className={style.ImgWrap}>
                <Image src={episodeData.episodeThumbnail} alt={episodeData.episodeThumbnail} width={140} height={120} />
              </div>
              <div className={style.contentWrap}>
                <p className={style.episodetitle}>{episodeData.episodeNumber}화 {episodeData.episodeTitle}</p>
                <div className={style.option}>
                  <div className={style.views}>
                    <Image src={'/assets/images/icons/star.svg'} alt={'평점'} width={10} height={10} />
                    <p className={style.viewstxt}>{episodeData.uploadDate}</p>
                  </div>
                  <div className={style.likes}>
                    <p className={style.likestxt}>{episodeData.totalScore}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.webtoonButton}>
              <button onClick={() => router.push('/changeepisode')}>수정</button>
              <button onClick={() => handleDeleteClick(episodeData.episodeId)}>삭제</button>
            </div>
          </div>
        )))
        :
        "작품이 없습니다."
      }
    </>
  );
}