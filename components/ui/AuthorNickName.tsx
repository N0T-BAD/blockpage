import React, { useEffect, useState } from 'react'
import style from '@/components/pages/mypage/UserNickName.module.css'
import UserIcon from '@/components/pages/mypage/UserIcon'
import axios from 'axios'
import { UserImgData, profileskinDataType } from '@/types/changeUserDataType'
import { authorNickname } from '@/types/authorNameDataType'
import { useSession } from 'next-auth/react'
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

  const [profileskin, setProfileSkin] = useState<profileskinDataType>({
    data: {
      profileSkin: '',
    }
  })


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://blockpage.site/member-service/v1/members?type=detail', {
          headers: {
            memberId: session?.email || '',
            // role: role,
          },
        });
        const { creatorNickname, profileImage, profileSkin } = res.data.data;
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
        setProfileSkin({
          data: {
            profileSkin,
          }
        })
      }
      catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [])

  console.log(authorNickName);
  console.log(userprofile);

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
            {profileskin.data.profileSkin &&
              <Image className={style.profileskinbox} src={profileskin.data.profileSkin} alt={profileskin.data.profileSkin} width={71} height={72} />
            }
          </div>
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
