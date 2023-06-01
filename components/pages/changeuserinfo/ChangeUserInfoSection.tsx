import React, { useEffect, useState } from 'react'
import style from '@/components/pages/changeuserinfo/ChangeUserInfoInfoSection.module.css'
import ChangeUserInfo from '@/components/pages/changeuserinfo/ChangeUserInfo'
import { ChangeUserDataType, UserImgData, profileskinDataType } from '@/types/changeUserDataType'
import ChangeUserProfileImg from './ChangeUserProfileImg'
import { profileskin } from '@/state/mypage/profileskin'
import { useRecoilState } from 'recoil'
import { userprofile } from '@/state/mypage/userprofile'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { usernickname } from '@/state/mypage/usernickname'
export default function ChangeUserInfoSection() {

  const { data: session } = useSession()

  const [profileSkinColor, setProfileSkinColor] = useRecoilState<profileskinDataType>(profileskin)
  const [userNickname, setUserNickname] = useRecoilState<ChangeUserDataType>(usernickname);
  const [userImg, setUserImg] = useRecoilState<UserImgData>(userprofile);

  useEffect(() => {
    if (session) {
      axios.get('https://blockpage.site/member-service/v1/members?type=detail', {
        headers: {
          memberId: session?.email || '',
          // role: role,
        },
      })
        .then((res) => {
          const profileImage = res.data.data.profileImage;
          const nickname = res.data.data.nickname;
          setUserImg({
            data: {
              profileImage,
            }
          });
          setUserNickname({
            data: {
              nickname,
            },
          });
          console.log(userImg.data.profileImage)
        })
    }
  }, [session])

  return (
    <>
      <section className={style.ChangeUserInfoTopSection}>
        <ChangeUserProfileImg profileSkinColor={profileSkinColor} setProfileSkinColor={setProfileSkinColor} userImg={userImg} userNickname={userNickname} setUserNickname={setUserNickname} />
      </section>
      <section className={style.ChangeUserInfoMiddleSection}>
        <ChangeUserInfo profileSkinColor={profileSkinColor} setProfileSkinColor={setProfileSkinColor} />
      </section>
    </>
  )
}
