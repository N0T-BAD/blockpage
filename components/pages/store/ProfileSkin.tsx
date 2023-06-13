import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import style from '@/components/pages/store/ProfileStore.module.css'
import Separator from '@/components/ui/Separator'
import { mySkinData, profileSkinDetail } from '@/types/storeDataType'

export default function ProfileSkin(props: { mySkin: mySkinData[], skinId: number, selectedSkinId: number, skinName: string, skinDescription: string, skinImage: string, blockPrice: number, handleSelectSkin: (skinId: number, skinName: string, profileSkinImage: string, blockQuantity: number) => void }) {

  const [myProfileSkin, setMyProfileSkin] = useState<profileSkinDetail[]>([]);

  useEffect(() => {
    props.mySkin.map((data) => {
      setMyProfileSkin(data.profileSkinDetail);
    });
  }, [])

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
          <div className={style.skinTxtTop}>
            <div>
              <p className={style.skinName}>{props.skinName}</p>
            </div>
            <div>
              <p className={props.skinId === props.selectedSkinId ? `${style.skinSelected}` : ""}>{props.skinId === props.selectedSkinId ? '선택' : ""}</p>
            </div>
            {/* <p className={props.skinId === props.selectedSkinId ? `${style.skinSelected}` : ""}>
              {
                myProfileSkin &&
                myProfileSkin.map((data) => (
                  props.skinId === data.id ?
                    '보유' : ""
                ))
              }
            </p> */}
          </div>
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