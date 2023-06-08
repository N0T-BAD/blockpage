import React from 'react'
import Image from 'next/image'

import style from '@/components/pages/store/ProfileStore.module.css'
import Separator from '@/components/ui/Separator'

export default function NftData(props: {
  nftCreatorId: string,
  nftMemberId: string,
  nftName: string,
  nftDescription: string,
  nftImage: string,
  nftBlockPrice: number,
  nftType: string,
  handleSelectSkin: (skinId: number, skinName: string, profileSkinImage: string, blockQuantity: number) => void
}) {
  return (
    <>
      <div className={style.skinImgDiv} onClick={() => console.log('onClick')}>
        <div className={style.skinImg}>
          {/* <Image
            src={props.nftImage}
            alt={props.nftName}
            width={80}
            height={80}
            priority
          /> */}
        </div>
        <div className={style.skinTxtDiv}>
          <p className={style.skinName}>{props.nftName}</p>
          <p className={style.skinDescription}>{props.nftDescription}</p>
          <p className={style.blockPrice}>{props.nftBlockPrice} 블럭</p>
        </div>
      </div>
      {
        <Separator
          color='var(--bp-line-gray)'
          gutter={0}
        />
      }
    </>
  )
}