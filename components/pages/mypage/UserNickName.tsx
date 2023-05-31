import React, { use, useEffect, useState } from 'react'
import style from '@/components/pages/mypage/UserNickName.module.css'
import UserIcon from './UserIcon'
import UserProfileImg from '@/components/ui/UserProfileImg'
import axios from 'axios'
import { ChangeUserDataType, profileskinDataType } from '@/types/changeUserDataType'
import { authorNickname, authorNicknameDataType } from '@/types/authorNameDataType'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { authornickname, usernickname } from '@/state/mypage/usernickname'
import { useRecoilState } from 'recoil'

// interface ChildProps {
//     profileSkinColor: profileskinDataType;
//     setProfileSkinColor: React.Dispatch<React.SetStateAction<profileskinDataType>>;
// }

export default function UserNickName() {

  const { data: session } = useSession()
  // const role = sessionStorage.getItem('role');
  const router = useRouter();

  const RouterUrl = router.pathname === "/webtooninfo" || router.pathname === "/authorworkslist" || router.pathname === "/webtoondelete" || router.pathname === "/episodelist" || router.pathname === "/episodeinfo"
    || router.pathname === "/episodedelete" || router.pathname === '/changewebtoon';


  const [userNickname, setUserNickname] = useRecoilState<ChangeUserDataType>(usernickname);

  const [authorNickName, setauthorNickName] = useRecoilState<authorNickname>(authornickname);

  console.log(authorNickName.data.creatorNickname)

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
        console.log(res.data)
        console.log(userNickname)
        console.log(authorNickName)
      })
  }, [])

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setUserNickname({
  //     ...userNickname,
  //     nickname: e.target.value,
  //   });
  // };

  // useEffect(() => {
  //     ('http://localhost:3000/api/v1/members?type=nickname')
  //         .then((res) => {
  //             setUserNickname(res.data);
  //         })
  // }, [])

  // useEffect(() => {
  //     ('http://localhost:3000/api/v1/members?type=author')
  //         .then((res) => {
  //             setAuthorNickname(res.data);
  //         })
  // }, [])


  return (
    <>
      <div className={style.usernicknameImgBox}>
        <div className={style.usernicknameImg}>
          <UserProfileImg />
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
