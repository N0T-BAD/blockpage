import React, { useState } from 'react'
import style from '@/components/pages/changeuserinfo/ChangeUserInfoInfoSection.module.css'
import UserNickName from '@/components/pages/mypage/UserNickName'
import ChangeUserInfo from '@/components/pages/changeuserinfo/ChangeUserInfo'
import { profileskinDataType } from '@/types/changeUserDataType'
export default function ChangeUserInfoSection() {

    const [profileSkinColor, setProfileSkinColor] = useState<profileskinDataType>(
        {
            // id: 0,
            color: '',
        }
    )

    return (
        <>
            <section className={style.ChangeUserInfoTopSection}>
                {/* <UserNickName profileSkinColor={profileSkinColor} setProfileSkinColor={setProfileSkinColor} /> */}
                <UserNickName />
            </section>
            <section className={style.ChangeUserInfoMiddleSection}>
                <ChangeUserInfo profileSkinColor={profileSkinColor} setProfileSkinColor={setProfileSkinColor} />
            </section>
        </>
    )
}
