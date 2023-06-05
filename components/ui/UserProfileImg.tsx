import Image from 'next/image'
import React from 'react'

import style from '@/components/pages/mypage/UserNickName.module.css'
import { UserImgData } from '@/types/changeUserDataType';

interface ChildProps {
  userImg: UserImgData;
}

export default function UserProfileImg({ userImg }: ChildProps) {

  return (
    <div className={style.userImage}>
      {
        userImg.data.profileImage ?
          <Image
            src={userImg.data.profileImage}
            alt="userProfileImage"
            width={70}
            height={70}
          />
          : <Image
            src={"/assets/images/mypage/userImg.png"}
            alt="userProfileImagePreview"
            width={70}
            height={70}
          />
      }
    </div>
  )
}
