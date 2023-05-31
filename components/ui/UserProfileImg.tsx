import Image from 'next/image'
import React from 'react'

import style from '@/components/pages/mypage/UserNickName.module.css'
import { UserImgData } from '@/types/changeUserDataType';

interface ChildProps {
  userImg: UserImgData;
  setUserImg: React.Dispatch<React.SetStateAction<UserImgData>>;
}

export default function UserProfileImg({ userImg, setUserImg }: ChildProps) {

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
