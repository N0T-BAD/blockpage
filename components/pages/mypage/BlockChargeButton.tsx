import React from 'react'
import style from '@/components/pages/mypage/BlockChargeButton.module.css'
import { useRouter } from 'next/router';

export default function BlockChargeButton() {

  const router = useRouter();

  const onClickCharge = () => {
    router.push("/blockcharge")
  }

  return (
    <div className={style.BlockChargeButton}>
      <button className={style.charge} onClick={onClickCharge}>
        충전하기
      </button>
    </div>
  )
}
