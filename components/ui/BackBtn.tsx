import Image from 'next/image'
import React from 'react'

import style from './BackBtn.module.css'

export default function BackBtn(props: { onClick: () => void }) {
  return (
    <div className={style.backbtn} onClick={props.onClick}>
      <Image
        src={'/assets/images/icons/back.svg'}
        alt="backBtnIcon"
        width={20}
        height={20}
        priority
      />
    </div>
  )
}