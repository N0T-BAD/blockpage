import React from 'react'
import Image from 'next/image'

import style from '@/components/pages/store/ProfileStore.module.css'
import Separator from '@/components/ui/Separator'

export default function NftData(props: {
  index: number,
  length: number,
  nftId: number,
  nftCreatorId: string,
  nftMemberId: string,
  nftName: string,
  selectedNftName: string,
  nftDescription: string,
  nftImage: string,
  nftBlockPrice: number,
  nftType: string,
  handleSelectNft: (
    nftId: number,
    nftName: string,
    nftImage: string,
    blockQuantity: number
  ) => void
}) {

  const number = props.length - 1;

  return (
    <>
      <div className={style.skinImgDiv} onClick={() => props.handleSelectNft(props.nftId, props.nftName, props.nftImage, props.nftBlockPrice)}>
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
            <div className={style.titleTxt}>
              <p className={style.skinName}>{props.nftName}</p>
            </div>
            <div>
              <p className={props.nftName === props.selectedNftName ? `${style.skinSelected}` : ""}>{props.nftName === props.selectedNftName ? '선택' : ""}</p>
            </div>
          </div>
          <p className={style.skinDescription}>{props.nftDescription}</p>
          <p className={style.blockPrice}>{props.nftBlockPrice} 블럭</p>
        </div>
      </div>
      {
        props.index !== number ?
          <Separator
            color='var(--bp-line-gray)'
            gutter={0}
          /> : ""
      }
    </>
  )
}