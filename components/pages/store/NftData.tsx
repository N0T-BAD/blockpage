import React from 'react'
import Image from 'next/image'

import style from '@/components/pages/store/ProfileStore.module.css'
import Separator from '@/components/ui/Separator'

export default function NftData(props: {
  nftCreatorId: string,
  nftMemberId: string,
  nftName: string,
  selectedNftName: string,
  nftDescription: string,
  nftImage: string,
  nftBlockPrice: number,
  nftType: string,
  handleSelectSkin: (
    nftId: number,
    nftName: string,
    nftImage: string,
    blockQuantity: number
  ) => void
}) {
  return (
    <>
      <div className={style.skinImgDiv} onClick={() => console.log('onClick')}>
        <div className={style.skinImg}>
          <Image
            src={props.nftImage}
            alt={props.nftName}
            width={80}
            height={80}
            priority
          />
        </div>
        <div className={style.skinTxtDiv}>
          <div className={style.skinTxtTop}>
            <p className={style.skinName}>{props.nftName}</p>
            <p className={props.selectedNftName === props.selectedNftName ? `${style.skinSelected}` : ""}>{props.selectedNftName === props.selectedNftName ? '선택' : ""}</p>
          </div>
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