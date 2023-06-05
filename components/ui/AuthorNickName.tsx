import React, { useEffect, useState } from 'react'
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
import Image from 'next/image'

export default function AuthorNickName() {

  const { data: session } = useSession()
  // const role = sessionStorage.getItem('role');

  const [authorNickName, setauthorNickName] = useState<authorNickname>({
    data: {
      creatorNickname: '',
    },
  });

  const [userImg, setUserImg] = useState<UserImgData>(
    {
      data: {
        profileImage: '',
      },
    }
  );


  const fetchData = async () => {
    try {
      const res = await axios.get('https://blockpage.site/member-service/v1/members?type=detail', {
        headers: {
          memberId: session?.email || '',
        },
      });
      const { creatorNickname, profileImage } = res.data.data;
      setauthorNickName({
        data: {
          creatorNickname,
        },
      });
      setUserImg({
        data: {
          profileImage,
        },
      });
      console.log(res.data);
      console.log(userImg)
      console.log(authorNickName);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(authorNickName);
  console.log(userprofile);

  return (
    <>
      <div className={style.usernicknameImgBox}>
        <div className={style.usernicknameImg}>
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
          {
            authorNickName.data.creatorNickname &&
            <p className={style.usernickname}>{authorNickName.data.creatorNickname}</p>
          }
          <div className={style.author}>
            <p>작가</p>
          </div>
        </div>
      </div>
    </>
  )
}
