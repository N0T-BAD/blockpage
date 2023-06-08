import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import axios from 'axios';

import style from '@/components/pages/webtoonepisode/EpisodeSection.module.css'

import Episode from './Episode';
import PreviewSection from './PreviewSection';
import Separator from '@/components/ui/Separator';
import { EpisodeViewListType, WebToonListDataType } from '@/types/webtoonDataType';
import PurchaseModal from '@/components/modals/PurchaseModal';

export default function EpisodeSection(props: { data: WebToonListDataType, episodeViewList: EpisodeViewListType[] }) {

  const { data: session } = useSession();

  const router = useRouter();
  const { webtoonId } = router.query;
  const webtoonData = props.data.data;
  const data = props.episodeViewList;

  const priceData = data.filter(item => item.episodePrice > 0)
  const freePriceData = data.filter(item => item.episodePrice === 0)

  const [isPreviewSection, setIsPreviewSection] = useState<boolean>(false);

  const [myBlock, setMyBlock] = useState<number>(0);

  const [showModal, setShowModal] = useState<boolean>(false);
  const [episodeIdModal, setEpisodeIdModal] = useState<number>(0);
  const [episodeNumberModal, setEpisodeIdNumberModal] = useState<number>(0);
  const [episodePriceModal, setEpisodePriceModal] = useState<number>(0);

  const handleView = () => {
    setIsPreviewSection(!isPreviewSection);
  }

  const handleShowModal = (episodeId: number, episodeNumber: number, episodePrice: number) => {
    setEpisodeIdModal(episodeId)
    setEpisodeIdNumberModal(episodeNumber)
    setEpisodePriceModal(episodePrice)
    setShowModal(true);
  }

  const handleEpisode = (paramEpisodeBM: string, paramPersistType: string, episodeId: number, episodeNumber: number, episodePrice: number, isRead: boolean) => {
    if (isRead) {
      axios.post(`https://blockpage.site/purchase-service/v1/purchases?type=${paramEpisodeBM}&webtoonId=${webtoonId}`, {
        blockQuantity: episodePrice,
        episodeId: episodeId,
        persistType: paramPersistType,
        webtoonTitle: webtoonData.webtoonTitle,
        episodeNumber: episodeNumber,
        webtoonThumbnail: webtoonData.webtoonThumbnail,
        creator: webtoonData.creator,
        illustrator: webtoonData.illustrator,
        genre: webtoonData.genre,
      }, {
        headers: {
          memberId: session?.email,
        }
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    router.push(`/webtoon/${webtoonId}/episode/${episodeId}/episode/${episodeNumber}`);
  };

  useEffect(() => {
    if (session) {
      axios.all([
        axios.get(`https://blockpage.site/block-service/v1/blocks`, {
          headers: { memberId: session.email }
        }),
        axios.get(`https://blockpage.site/purchase-service/v1/purchases?type=episodeBMFree&webtoonId=${webtoonId}`, {
          headers: { memberId: session.email }
        }),
        axios.get(`https://blockpage.site/purchase-service/v1/purchases?type=episodeBMPaid&webtoonId=${webtoonId}`, {
          headers: { memberId: session.email }
        }),
      ])
        .then(
          axios.spread((getBlock, free, paid) => {
            setMyBlock(getBlock.data.data.totalBlocks);
            const freeData = free.data.data;
            const paidData = paid.data.data;

            if (freeData) {
              freePriceData.map((item) => (
                freeData.map((item2: EpisodeViewListType) => {
                  item.episodeId === item2.episodeId ? item.isRead = true : "";
                  item.episodeId === item2.episodeId ? item.leftTimer = item2.leftTimer : "";
                })
              ))
            }

            if (paidData) {
              priceData.map((item) => (
                paidData.map((item2: EpisodeViewListType) => {
                  item.episodeId === item2.episodeId ? item.isRead = true : "";
                  item.episodeId === item2.episodeId ? item.leftTimer = item2.leftTimer : "";
                })
              ))
            }
          })
        )
        .catch((err) => {
          console.log(err);
        });
    };
  }, [session?.email]);

  return (
    <>
      {
        showModal &&
        <PurchaseModal
          myBlock={myBlock}
          episodeId={episodeIdModal}
          episodeNumber={episodeNumberModal}
          episodePrice={episodePriceModal}
          setShowModal={setShowModal}
          handleEpisode={handleEpisode}
        />
      }
      <PreviewSection isPreviewSection={isPreviewSection} handleView={handleView} priceData={priceData} />
      {
        isPreviewSection &&
        priceData &&
        priceData.map((item) => (
          <section
            className={
              item.isRead === true ?
                `${style.episodeWrapSection} ${style.bgGray}` : `${style.episodeWrapSection}`
            }
            key={item.episodeId}
            onClick={
              item.isRead === true ?
                () => handleEpisode('episodeBMPaid', 'rental', item.episodeId, item.episodeNumber, item.episodePrice, false) :
                myBlock >= 4 ?
                  () => handleShowModal(item.episodeId, item.episodeNumber, item.episodePrice) :
                  () => console.log('블럭 충전 페이지로 이동')
            }
          >
            {
              <>
                <Episode
                  subject={item.episodeTitle}
                  thumbnail={item.episodeThumbnail}
                  price={item.episodePrice}
                  rating={item.rating}
                  leftTimer={item.leftTimer}
                  uploadDate={item.uploadDate}
                />
                <Separator
                  color='var(--bp-line-gray)'
                  gutter={0}
                />
              </>
            }
          </section>
        ))
      }
      {
        freePriceData &&
        freePriceData.map((item) => (
          <section
            className={
              item.isRead === true ?
                `${style.episodeWrapSection} ${style.bgGray}` :
                `${style.episodeWrapSection}`
            }
            key={item.episodeId}
            onClick={
              item.isRead === true ?
                () => handleEpisode('episodeBMFree', 'permanent', item.episodeId, item.episodeNumber, item.episodePrice, false) :
                () => handleEpisode('episodeBMFree', 'permanent', item.episodeId, item.episodeNumber, item.episodePrice, true)
            }
          >
            <Episode
              subject={item.episodeTitle}
              thumbnail={item.episodeThumbnail}
              price={item.episodePrice}
              rating={item.rating}
              uploadDate={item.uploadDate}
            />
            <Separator
              color='var(--bp-line-gray)'
              gutter={0}
            />
          </section>
        ))
      }
    </>
  )
}
