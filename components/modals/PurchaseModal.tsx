import React, { useEffect } from 'react'
import { useRouter } from 'next/router';

import style from '@/components/modals/RatingModal.module.css'
import CloseBtn from '../ui/CloseBtn';

export default function PurchaseModal(props: { myBlock: number, episodeId: number, episodeNumber: number, episodePrice: number, setShowModal: React.Dispatch<React.SetStateAction<boolean>>, handleEpisode: (paramEpisodeBM: string, paramPersistType: string, episodeId: number, episodeNumber: number, episodePrice: number, isRead: boolean) => void }) {
  const router = useRouter();
  const { webtoonId } = router.query;

  const handleViewEpisode = () => {
    props.setShowModal(false);

    props.handleEpisode('episodeBMPaid', 'rental', props.episodeId, props.episodeNumber, props.episodePrice, true)

    router.push(`/webtoon/${webtoonId}/episode/${props.episodeId}/episode/${props.episodeNumber}`)
  }

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  return (
    <div className={style.modalBox}>
      <div className={style.modal}>
        <div className={style.closeBtn} onClick={() => props.setShowModal(false)}>
          <CloseBtn
            height={20}
            width={20}
          />
        </div>
        <div className={style.formBox}>
          <p className={style.myBlock}>내 블럭 : {props.myBlock}개</p>
          <p className={style.useBlock}>블럭 {props.episodePrice}개를 사용하여</p>
          <p className={style.useBlock}><span>{props.episodeNumber}화</span>를 구매하시겠습니까?</p>
          <div className={style.confirmBox}>
            <button type='button' className={style.confirmBtn} onClick={handleViewEpisode}>확인</button>
            <button type='button' className={style.cancle} onClick={() => props.setShowModal(false)}>취소</button>
          </div>
        </div>
      </div>
    </div>
  )
}
