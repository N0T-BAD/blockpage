import React, { useEffect } from 'react'

import style from '@/components/modals/RatingModal.module.css'
import Separator from '@/components/ui/Separator'
import CloseBtn from '../ui/CloseBtn';

export default function RatingModal(props: { handleRating: () => void }) {

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
        <div className={style.closeBtn} onClick={props.handleRating}>
          <CloseBtn
            height={20}
            width={20}
          />
        </div>
        <div className={style.formBox}>
          <form action="">
            <input type="text" className={style.rating} placeholder='10' />
            <Separator
              color='var(--bp-line-gray)'
              gutter={0}
            />
            <p className={style.description}>최소 0점에서 10점까지</p>
            <div className={style.confirmBox}>
              <button type='submit' className={style.confirm}>확인</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
