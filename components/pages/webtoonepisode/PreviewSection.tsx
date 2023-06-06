import React from 'react'
import Image from 'next/image';

import style from '@/components/pages/webtoonepisode/EpisodeSection.module.css'
import { EpisodeViewListType } from '@/types/webtoonDataType';

export default function PreviewSection(props: { isPreviewSection: boolean, handleView: () => void, priceData: EpisodeViewListType[] }) {
  return (
    <section className={style.previewSection}>
      <div className={style.previewDiv} onClick={props.handleView}>
        <div className={style.previewTxtDiv}>
          {
            !props.isPreviewSection ?
              <>
                <p>{props.priceData.length}개</p>
                <p>의 미리보기가 있습니다</p>
              </> :
              <p>미리보기 접기</p>
          }
        </div>
        <div className={style.imgBox}>
          <div className={style.imgDiv}>
            {
              !props.isPreviewSection &&
              props.priceData.map((data) => (
                <Image
                  key={data.episodeId}
                  src={data.episodeThumbnail}
                  alt='에피소드 썸네일'
                  width={30}
                  height={30}
                  priority
                />
              ))
            }
          </div>
          {
            props.isPreviewSection ?
              <div className={style.upArrow}>
                <Image
                  src={'/assets/images/icons/back.svg'}
                  alt='화살표 방향 위'
                  width={20}
                  height={20}
                  priority
                />
              </div> :
              <div className={style.downArrow}>
                <Image
                  src={'/assets/images/icons/back.svg'}
                  alt='화살표 방향 아래'
                  width={20}
                  height={20}
                  priority
                />
              </div>
          }
        </div>
      </div>
    </section>
  )
}
