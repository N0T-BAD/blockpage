import React, { use, useEffect, useState } from 'react'
import style from '@/components/pages/mypage/UserNickName.module.css'
import UserIcon from './UserIcon'
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

  const RouterUrl = router.pathname === "/webtooninfo" || router.pathname === "/authorworkslist" || router.pathname === "/webtoondelete" || router.pathname === "/episodelist" || router.pathname === "/episodeinfo"
    || router.pathname === "/episodedelete" || router.pathname === '/changewebtoon';

  const [userNickname, setUserNickname] = useRecoilState<ChangeUserDataType>(usernickname);

  const [authorNickName, setauthorNickName] = useRecoilState<authorNickname>(authornickname);

  const [userImg, setUserImg] = useRecoilState<UserImgData>(userprofile);

  console.log(authorNickName.data.creatorNickname)
  console.log(userImg.data.profileImage)

  useEffect(() => {
    axios.get('https://blockpage.site/member-service/v1/members?type=detail', {
      headers: {
        memberId: session?.email || '',
        // role: role,
      },
    })
      .then((res) => {
        const nickname = res.data.data.nickname;
        const creatorNickname = res.data.data.creatorNickname;
        const profileImage = res.data.data.profileImage;
        setUserNickname({
          data: {
            nickname,
          },
        });
        setauthorNickName({
          data: {
            creatorNickname,
          },
        });
        setUserImg({
          data: {
            profileImage,
          }
        })
        console.log(res.data)
        console.log(userNickname)
        console.log(authorNickName)
      })
  }, [])

  return (
    <>
      <div className={style.usernicknameImgBox}>
        <div className={style.usernicknameImg}>
          <UserProfileImg userImg={userImg} setUserImg={setUserImg} />
          {RouterUrl ?
            <>
              {
                authorNickName.data.creatorNickname &&
                <>
                  <>
                    <p className={style.usernickname}>{authorNickName.data.creatorNickname}</p>
                  </>
                </>
              }
            </>
            : <>
              {userNickname.data.nickname &&
                <>
                  <p className={style.usernickname}>{userNickname.data.nickname}</p>
                </>
              }
            </>
          }
          <UserIcon />
        </div>
      </div>
    </>
  )
}
