import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import style from '@/components/pages/mypage/UserNickName.module.css'
import { ChangeUserImageDataType } from '@/types/changeUserDataType';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function UserProfileImg() {

  // const [userprofileImg, setUserProfileImg] = useState<ChangeUserImageDataType>(
  //   {
  //     profileimage: '',
  //     profileskin: '',
  //   }
  // );

  const router = useRouter();
  const [userProfileImage, setUserProfileImage] = useState<File>();
  const [userProfileImagePreview, setUserProfileImagePreview] = useState<string>();

  const routerPathname = router.pathname === '/mypage' || router.pathname === '/authorworkslist' || router.pathname === '/episodelist' || router.pathname === '/changeepisode' || router.pathname === '/episodedelete' || router.pathname === '/episodeinfo' || router.pathname === '/webtooninfo' || router.pathname === '/changewebtoon' || router.pathname === '/webtoondelete' || router.pathname === '/changeuserinfo';

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

  return (
    <div className={style.userImage}>
      {routerPathname ?
        <>
          {/* {userprofileImg?.profileskin ?
            <> */}
          {userProfileImagePreview && <Image src={userProfileImagePreview} className={style.userProfileImagePreview} alt="userProfileImagePreview" width={70} height={70} />}
          {router.pathname === '/changeuserinfo' ?
            <label className={style.uploadBtn}>
              <input type="file" accept="image/*" onChange={handleuserProfileImage} />
              <Image className={style.userImage2} src={"/assets/images/icons/imagebtn.svg"} alt={"userImgbtn"} width={25} height={25} />
            </label>
            :
            <Image className={style.userImage1} src={"/assets/images/mypage/userImg.png"} alt={"userImg"} width={60} height={60} />
          }
          {/* </>
            :
            <>
              <Image className={style.userImage1} src={userprofileImg.profileimage} alt={"userImg"} width={50} height={50} />
              <Image className={style.userImage2} src={"/assets/images/icons/imagebtn.svg"} alt={"userImgbtn"} width={20} height={20} />
            </>
          }
        </> */}
        </>
        :
        <></>
      }
    </div>
  )
}
