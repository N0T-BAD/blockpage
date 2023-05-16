import React from 'react'
import Image from 'next/image'

import style from '@/pages/ratingModal.module.css'
import Separator from '@/components/ui/Separator'

export default function ratingModal() {
  return (
    <div>
      <div className={style.box}>
        <div className={style.closeBtn}>
          <Image
            src={'/assets/images/icons/close.svg'}
            alt="footerBtnIcon"
            width={50}
            height={50}
            priority
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
