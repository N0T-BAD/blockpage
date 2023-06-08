import Image from 'next/image'
import React from 'react'

import style from '@/components/pages/mypage/UserNickName.module.css'
import { UserImgData, profileskinDataType } from '@/types/changeUserDataType';

interface ChildProps {
  userImg: UserImgData;
  userprofileSkin: profileskinDataType;
}

export default function UserProfileImg({ userImg, userprofileSkin }: ChildProps) {

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
      {userprofileSkin.data.profileSkin &&
        <Image className={style.profileskinbox} src={userprofileSkin.data.profileSkin} alt={userprofileSkin.data.profileSkin} width={70} height={70} />
      }
    </div>
  )
}
