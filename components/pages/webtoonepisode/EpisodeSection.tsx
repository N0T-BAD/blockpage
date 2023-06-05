import React, { useState } from 'react'
import { useRouter } from 'next/router';
import Episode from './Episode';
import Image from 'next/image';

import style from '@/components/pages/webtoonepisode/EpisodeSection.module.css'

import { EpisodeViewListType } from '@/types/webtoonDataType';
import Separator from '@/components/ui/Separator';

export default function EpisodeSection(props: { episodeViewList: EpisodeViewListType[] }) {

  const router = useRouter();
  const { webtoonId } = router.query;
  const data = props.episodeViewList;

  const [isPreviewSection, setIsPreviewSection] = useState<boolean>(true);

  return (
    <>
      <section className={style.previewSection}>
        <div className={style.previewDiv}>
          <div className={style.previewTxtDiv}>
            <p>2개</p>
            <p>의 미리보기가 있습니다</p>
          </div>
          <div className={style.imgBox}>
            <div>
              <div>
                <Image
                  src={data[0].episodeThumbnail}
                  alt='에피소드 썸네일'
                  width={30}
                  height={20}
                  priority
                />
                <Image
                  src={data[0].episodeThumbnail}
                  alt='에피소드 썸네일'
                  width={30}
                  height={20}
                  priority
                />
              </div>
            </div>
            <div className={style.downArrow}>
              <Image
                src={'/assets/images/icons/back.svg'}
                alt='에피소드 썸네일'
                width={20}
                height={20}
                priority
              />
            </div>
          </div>
        </div>
      </section>
      {
        //미리보기 섹션
        isPreviewSection &&
        <section className={style.episodeSection} key={data[0].episodeNumber} onClick={() => router.push(`/webtoon/${webtoonId}/episode/${data[0].episodeId}/episode/${data[0].episodeNumber}`)}>
          <Episode
            id={data[0].episodeNumber}
            subject={data[0].episodeTitle}
            thumbnail={data[0].episodeThumbnail}
            rating={data[0].rating}
            uploadDate={data[0].uploadDate}
          />
          <Separator
            color='var(--bp-line-gray)'
            gutter={1}
          />
        </section >
      }
      <section className={style.episodeSection}>
        {
          data &&
          data.map((item) => (
            <section key={item.episodeNumber} onClick={() => router.push(`/webtoon/${webtoonId}/episode/${item.episodeId}/episode/${item.episodeNumber}`)}>
              <Episode
                id={item.episodeNumber}
                subject={item.episodeTitle}
                thumbnail={item.episodeThumbnail}
                rating={item.rating}
                uploadDate={item.uploadDate}
              />
              <Separator
                color='var(--bp-line-gray)'
                gutter={1}
              />
            </section>
          ))
        }
      </section>
    </>
  )
}
