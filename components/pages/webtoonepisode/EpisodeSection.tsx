import React, { useState } from 'react'
import { useRouter } from 'next/router';
import Episode from './Episode';
import { useSession } from 'next-auth/react';
import axios from 'axios';

import style from '@/components/pages/webtoonepisode/EpisodeSection.module.css'

import { EpisodeViewListType, WebToonListDataType } from '@/types/webtoonDataType';
import Separator from '@/components/ui/Separator';
import PreviewSection from './PreviewSection';

export default function EpisodeSection(props: { data: WebToonListDataType, episodeViewList: EpisodeViewListType[] }) {

  const { data: session } = useSession();
  console.log(session?.email)

  const router = useRouter();
  const { webtoonId } = router.query;
  const webtoonData = props.data.data;
  const data = props.episodeViewList;

  const priceData = data.filter(item => item.episodePrice > 0)
  const freePriceData = data.filter(item => item.episodePrice === 0)

  const [isPreviewSection, setIsPreviewSection] = useState<boolean>(false);

  const handleView = () => {
    setIsPreviewSection(!isPreviewSection);
  }

  const handleEpisode = (episodeId: number, episodeNumber: number, episodePrice: number) => {
    axios.post(`https://blockpage.site/purchase-service/v1/purchases?type=episodeBMFree&webtoonId=${webtoonId}`, {
      blockQuantity: episodePrice,
      episodeId: episodeId,
      persistType: "permanent",
      webtoonTitle: webtoonData.webtoonTitle,
      episodeNumber: episodeNumber,
    }, {
      headers: {
        memberId: session?.email,
      }
    })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })

    router.push(`/webtoon/${webtoonId}/episode/${episodeId}/episode/${episodeNumber}`)
  }

  return (
    <>
      <PreviewSection isPreviewSection={isPreviewSection} handleView={handleView} priceData={priceData} />
      {
        //미리보기 섹션
        <section className={style.episodeSection}>
          {
            isPreviewSection &&
            priceData &&
            priceData.map((item) => (
              <section key={item.episodeNumber} onClick={() => router.push(`/webtoon/${webtoonId}/episode/${item.episodeId}/episode/${item.episodeNumber}`)}>
                <Episode
                  id={item.episodeNumber}
                  subject={item.episodeTitle}
                  thumbnail={item.episodeThumbnail}
                  price={item.episodePrice}
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
      }
      <section className={style.episodeSection}>
        {
          freePriceData &&
          freePriceData.map((item) => (
            <section key={item.episodeNumber} onClick={() => handleEpisode(item.episodeId, item.episodeNumber, item.episodePrice)}>
              <Episode
                id={item.episodeNumber}
                subject={item.episodeTitle}
                thumbnail={item.episodeThumbnail}
                price={item.episodePrice}
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
