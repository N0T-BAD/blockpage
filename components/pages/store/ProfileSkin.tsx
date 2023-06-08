import React from 'react'
import Image from 'next/image'

import style from '@/components/pages/store/ProfileStore.module.css'
import Separator from '@/components/ui/Separator'

export default function ProfileSkin(props: { skinId: number, skinName: string, skinDescription: string, skinImage: string, blockPrice: number, handleSelectSkin: (skinId: number, skinName: string, profileSkinImage: string, blockQuantity: number) => void }) {
  return (
    <>
      <div className={style.skinImgDiv} onClick={() => props.handleSelectSkin(props.skinId, props.skinName, props.skinImage, props.blockPrice)}>
        <div className={style.skinImg}>
          <Image
            src={props.skinImage}
            alt={props.skinName}
            width={80}
            height={80}
            priority
          />
        </div>
        <div className={style.skinTxtDiv}>
          <p className={style.skinName}>{props.skinName}</p>
          <p className={style.skinDescription}>{props.skinDescription}</p>
          <p className={style.blockPrice}>{props.blockPrice} 블럭</p>
        </div>
      </div>
      {
        props.skinId !== 7 &&
        <Separator
          color='var(--bp-line-gray)'
          gutter={0}
        />
      }
    </>
  )
}