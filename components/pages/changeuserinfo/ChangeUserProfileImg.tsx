import { ChangeUserDataType, UserImgData, profileskinDataType } from '@/types/changeUserDataType';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import UserIcon from '../mypage/UserIcon';
import { BasicImage, userNickName } from '@/data/userNickName';
import style from '@/components/pages/mypage/UserNickName.module.css'
import axios from 'axios';
import { useSession } from 'next-auth/react';

interface ChildProps {
  profileSkinColor: profileskinDataType;
  setProfileSkinColor: React.Dispatch<React.SetStateAction<profileskinDataType>>;
}

export default function ChangeUserProfileImg({ profileSkinColor, setProfileSkinColor }: ChildProps) {

  const { data: session } = useSession()
  // const role = sessionStorage.getItem('role');

  // const [userprofileImg, setUserProfileImg] = useState<ChangeUserImageDataType>(
  //   {
  //     profileimage: '',
  //     profileskin: '',
  //   }
  // );

  const router = useRouter();
  const [userProfileImage, setUserProfileImage] = useState<File>();
  const [userProfileImagePreview, setUserProfileImagePreview] = useState<string>();

  const [userNickname, setUserNickname] = useState<ChangeUserDataType>(
    {
      data: {
        nickname: '',
      }
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
    setProfileSkinColor(profileSkinColor);
  }, [profileSkinColor, setProfileSkinColor])

  // useEffect(() => {
  //   axios.get('http://localhost:3000/api/v1/members?type=profileimage')
  //     .then((res) => {
  //       setUserProfileImg(res.data);
  //     })
  //   axios.get('http://localhost:3000/api/v1/members?type=profileskin')
  //     .then((res) => {
  //       setUserProfileImg(res.data);
  //     })
  // }, [])

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

  const handleuserProfileImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        setUserProfileImagePreview(reader.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
      setUserProfileImage(e.target.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserNickname({
      data: {
        nickname: e.target.value,
      }
    });
  };

  const handleBasicImageChange = () => {
    setUserProfileImagePreview("/assets/images/mypage/userImg.png");
  };

  return (
    <div className={style.usernicknameImgBox}>
      <div className={style.usernicknameImg}>
        {/* {userprofileImg?.profileskin ?
            <> */}
        <div className={style.changeuserinfobox}>
          <>
            <div className={style.profileskin}>
              {userImg.data.profileImage ?
                <Image src={userImg.data.profileImage} className={style.userProfileImagePreview} alt="userImg" width={70} height={70} />
                :
                <>
                  {userProfileImagePreview &&
                    <Image src={userProfileImagePreview} className={style.userProfileImagePreview} alt="userProfileImagePreview" width={70} height={70} />
                  }
                </>
              }
              {
                profileSkinColor ?
                  <Image className={style.profileskinbox} src={profileSkinColor.imgurl} alt={profileSkinColor.color} width={70} height={70} key={profileSkinColor.id} />
                  :
                  <Image className={style.profileskinbox} src={"/assets/images/profile/purple.svg"} alt={"프로필 스킨"} width={70} height={70} />
              }
              <UserIcon />
            </div>

            <div className={style.infobox}>
              <div className={style.btn_input_box}>
                <label className={style.uploadBtn}>
                  <input type="file" accept="image/*" onChange={handleuserProfileImage} />
                  <p>upload</p>
                </label>
                <p className={style.basicimg} onClick={handleBasicImageChange}>기본 이미지 변경</p>
              </div>
              <div className={style.btn_input_box}>
                <p>닉네임</p>
                {userNickname &&
                  <>
                    {userNickName.map((data) => (
                      <input className={style.usernickname2} type='text' defaultValue={data.nickname} onChange={handleChange} key={data.id} />
                    ))}
                  </>
                }
              </div>
            </div >
          </>
        </div>
      </div>
    </div>
  )
}
