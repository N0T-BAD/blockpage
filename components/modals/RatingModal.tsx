import React, { useEffect } from 'react'

import style from '@/components/modals/RatingModal.module.css'
import Separator from '@/components/ui/Separator'
import CloseBtn from '../ui/CloseBtn';

export default function RatingModal(props: { handleShowRating: () => void, handleIsRating: () => void, setValue: React.Dispatch<React.SetStateAction<number>>, value: number }) {

  const MAX_VALUE = 10;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    const regex = /^[0-9]+$/;

    if (regex.test(e.target.value) && newValue > MAX_VALUE) {
      props.setValue(MAX_VALUE);
    } else {
      props.setValue(newValue);
    }
  };

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
        <div className={style.closeBtn} onClick={props.handleShowRating}>
          <CloseBtn
            height={20}
            width={20}
          />
        </div>
        <div className={style.formBox}>
          <form action="">
            <input
              type="text"
              name='rating'
              className={style.rating}
              min="1"
              max={MAX_VALUE}
              value={props.value || ''}
              maxLength={2}
              placeholder='10'
              onChange={handleChange}
            />
            <Separator
              color='var(--bp-line-gray)'
              gutter={0}
            />
            <p className={style.description}>1점에서 10점까지</p>
            <div className={style.confirmBox}>
              <button type='button' className={style.confirm} onClick={props.handleIsRating}>확인</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
