import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react';

import style from '@/components/pages/mypage/UserNickName.module.css'
import { ChangeUserImageDataType, UserImgData, profileskinDataType } from '@/types/changeUserDataType';
import axios from 'axios';

export default function UserProfileImg() {

  const { data: session } = useSession();
  // const role = sessionStorage.getItem('role');

  const [userprofileImg, setUserProfileImg] = useState<ChangeUserImageDataType>(
    {
      profileimage: '',
      profileskin: '',
    }
  );
  const [userImg, setUserImg] = useState<UserImgData>(
    {
      data: {
        profileImage: '',
      }
    }
  );

  const [basicimg, setBasicImg] = useState<profileskinDataType>();

  useEffect(() => {
    if (userImg.data.profileImage) {
      axios.get('https://blockpage.site/member-service/v1/members?type=detail', {
        headers: {
          memberId: session?.email || '',
          // role: role,
        },
      })
        .then((res) => {
          setUserImg(res.data);
          console.log(res.data)
          console.log(userImg)
          console.log(userImg.data.profileImage)
        })
    }
  }, [])

  return (
    <div className={style.userImage}>
      {
        userImg.data.profileImage ?
          <Image
            src={userImg.data.profileImage}
            alt="userProfileImagePreview"
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
