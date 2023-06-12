import React, { use, useEffect, useState } from 'react'
import style from '@/components/pages/mypage/UserNickName.module.css'
import UserIcon from '@/components/pages/mypage/UserIcon'
import UserProfileImg from '@/components/ui/UserProfileImg'
import axios from 'axios'
import { ChangeUserDataType, UserImgData, profileskinDataType } from '@/types/changeUserDataType'
import { useSession } from 'next-auth/react'
import { authornickname, usernickname } from '@/state/mypage/usernickname'
import { useRecoilState } from 'recoil'
import { userprofile } from '@/state/mypage/userprofile'
import { profileskin } from '@/state/mypage/profileskin'
import Image from 'next/image'

export default function UserNickName() {

  const { data: session } = useSession()
  // const role = sessionStorage.getItem('role');

  const [userNickname, setUserNickname] = useRecoilState<ChangeUserDataType>(usernickname);
  const [userprofileSkin, setUserProfileSkin] = useRecoilState<profileskinDataType>(profileskin)
  const [userImg, setUserImg] = useRecoilState<UserImgData>(userprofile);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://blockpage.site/member-service/v1/members?type=detail', {
          headers: {
            memberId: session?.email || '',
            // role: role,
          },
        });
        const { nickname, profileImage, profileSkin } = res.data.data;
        setUserNickname({
          data: {
            nickname,
          },
        });
        setUserImg({
          data: {
            profileImage,
          }
        })
        setUserProfileSkin({
          data: {
            profileSkin,
          }
        });
        console.log(res.data)
        console.log(userImg)
      }
      catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [])

  return (
    <>
      <div className={style.usernicknameImgBox}>
        <div className={style.usernicknameImg}>
          <div className={style.profileskin}>
            {
              userImg.data.profileImage ?
                <Image
                  src={userImg.data.profileImage}
                  alt="userProfileImage"
                  width={69}
                  height={69}
                />
                : <Image
                  src={"/assets/images/mypage/userImg.png"}
                  alt="userProfileImagePreview"
                  width={70}
                  height={70}
                />
            }
            {userprofileSkin.data.profileSkin &&
              <Image className={style.profileskinbox} src={userprofileSkin.data.profileSkin} alt={userprofileSkin.data.profileSkin} width={71} height={72} />
            }
          </div>
          {userNickname.data.nickname &&
            <p className={style.usernickname}>{userNickname.data.nickname}</p>
          }
          <UserIcon />
        </div>
      </div>
    </>
  )
}
