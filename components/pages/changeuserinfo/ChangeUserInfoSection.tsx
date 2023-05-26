import React, { useState } from 'react'
import style from '@/components/pages/changeuserinfo/ChangeUserInfoInfoSection.module.css'
import ChangeUserInfo from '@/components/pages/changeuserinfo/ChangeUserInfo'
import { profileskinDataType } from '@/types/changeUserDataType'
import ChangeUserProfileImg from './ChangeUserProfileImg'
export default function ChangeUserInfoSection() {

  const [profileSkinColor, setProfileSkinColor] = useState<profileskinDataType>(
    {
      id: 0,
      color: '',
      imgurl: '',
    }
  )

  return (
    <>
      <section className={style.ChangeUserInfoTopSection}>
        <ChangeUserProfileImg profileSkinColor={profileSkinColor} setProfileSkinColor={setProfileSkinColor} />
      </section>
      <section className={style.ChangeUserInfoMiddleSection}>
        <ChangeUserInfo profileSkinColor={profileSkinColor} setProfileSkinColor={setProfileSkinColor} />
      </section>
    </>
  )
}
