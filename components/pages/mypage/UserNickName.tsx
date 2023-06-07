import React, { use, useEffect, useState } from 'react'
import style from '@/components/pages/mypage/UserNickName.module.css'
import UserIcon from '@/components/pages/mypage/UserIcon'
import UserProfileImg from '@/components/ui/UserProfileImg'
import axios from 'axios'
import { ChangeUserDataType, UserImgData } from '@/types/changeUserDataType'
import { authorNickname } from '@/types/authorNameDataType'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { authornickname, usernickname } from '@/state/mypage/usernickname'
import { useRecoilState } from 'recoil'
import { userprofile } from '@/state/mypage/userprofile'

export default function UserNickName() {

  const { data: session } = useSession()
  // const role = sessionStorage.getItem('role');
  const router = useRouter();

  const [userNickname, setUserNickname] = useRecoilState<ChangeUserDataType>(usernickname);

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
        const { nickname, profileImage } = res.data.data;
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
          <UserProfileImg userImg={userImg} />
          {userNickname.data.nickname &&
            <p className={style.usernickname}>{userNickname.data.nickname}</p>
          }
          <UserIcon />
        </div>
      </div>
    </>
  )
}
