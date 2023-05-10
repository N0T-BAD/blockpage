import React from 'react'
import style from '@/components/pages/blockcharge/MyBlock.module.css'
import Image from 'next/image'

export default function MyBlock() {
  return (
    <div className={style.MyBlockbg}>
      <div className={style.MyBlock}>
        <Image src={'/assets/images/icons/Block.svg'} alt="block" width={30} height={25} />
        <p>보유 블럭 100</p>
      </div>
      <div className={style.MyBuyBlock}>
        <p>구매 블럭 100</p>
      </div>
      <div className={style.MyPointBlock}>
        <p>적립 블럭 100</p>
      </div>
    </div>
  )
}