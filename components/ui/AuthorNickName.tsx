import React, { useEffect } from 'react'
import style from '@/components/pages/mypage/UserNickName.module.css'
import UserIcon from '@/components/pages/mypage/UserIcon'
import UserProfileImg from '@/components/ui/UserProfileImg'
import axios from 'axios'
import { UserImgData } from '@/types/changeUserDataType'
import { authorNickname } from '@/types/authorNameDataType'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { authornickname } from '@/state/mypage/usernickname'
import { useRecoilState } from 'recoil'
import { userprofile } from '@/state/mypage/userprofile'

export default function UserNickName() {

  const { data: session } = useSession()
  // const role = sessionStorage.getItem('role');
  const router = useRouter();

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
        const creatorNickname = res.data.data.creatorNickname;
        const profileImage = res.data.data.profileImage;
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
        console.log(authorNickName)
      })
  }, [])

  return (
    <>
      <div className={style.usernicknameImgBox}>
        <div className={style.usernicknameImg}>
          <UserProfileImg userImg={userImg} />
          {
            authorNickName.data.creatorNickname &&
            <p className={style.usernickname}>{authorNickName.data.creatorNickname}</p>
          }
          <UserIcon />
        </div>
      </div>
    </>
  )
}
