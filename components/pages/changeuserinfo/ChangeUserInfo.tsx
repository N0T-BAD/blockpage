import React, { useState } from 'react'
import style from '@/components/pages/changeuserinfo/ChangeUserInfo.module.css'
import { profileskinDataType } from '@/types/changeUserDataType'
import { profileskinData } from '@/data/profileskinData'
import Image from 'next/image';

interface ChildProps {
  profileSkinColor: profileskinDataType;
  setProfileSkinColor: React.Dispatch<React.SetStateAction<profileskinDataType>>;
}

export default function ChangeUserInfo({ profileSkinColor, setProfileSkinColor }: ChildProps) {

  const handleProfileSkinColor = (imgurl: string) => {
    setProfileSkinColor({ imgurl: imgurl });
  };

  return (
    <>
      <div className={style.ChangeUserIntoWrap}>
        <div className={style.profileSkinWrap}>
          <p className={style.profileSkintxt}>프로필 스킨 변경</p>
          <div className={style.profileSkinBox}>
            <div className={style.ProfileSkinButtonBox}>
              {profileSkinColor && profileskinData.map((btnData) => (
                <button onClick={() => handleProfileSkinColor(btnData.imgurl)}>
                  <Image src={btnData.imgurl} alt={btnData.imgurl} width={50} height={50} />
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className={style.certificationBox}>
          <p className={style.certificationtxt}>성인 인증을 하시면 다양한 작품을 감상할 수 있습니다.</p>
          <button className={style.certificationBtn}>성인 인증</button>
        </div>
        <div className={style.ChangeButtonBox}>
          <button className={style.ChangeButton}>변경</button>
        </div>
      </div>
    </>
  )
}
