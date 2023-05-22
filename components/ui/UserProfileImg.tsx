import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import style from '@/components/pages/mypage/UserNickName.module.css'
import { ChangeUserDataType, ChangeUserImageDataType, profileskinDataType } from '@/types/changeUserDataType';
import axios from 'axios';
import { useRouter } from 'next/router';
import { BasicImage, userNickName } from '@/data/userNickName'
import UserIcon from '../pages/mypage/UserIcon';

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

  const [userNickname, setUserNickname] = useState<ChangeUserDataType>(
    {
      id: 0,
      nickname: '',
    }
  );

  const [basicimg, setBasicImg] = useState<profileskinDataType>();

  const routerPathname = router.pathname === '/mypage' || router.pathname === '/authorworkslist' || router.pathname === '/episodelist' || router.pathname === '/changeepisode' || router.pathname === '/episodedelete' || router.pathname === '/episodeinfo' || router.pathname === '/webtooninfo' || router.pathname === '/changewebtoon' || router.pathname === '/webtoondelete' || router.pathname === '/changeuserinfo' || router.pathname === '/menu';

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserNickname({
      ...userNickname,
      nickname: e.target.value,
    });
  };

  const handleBasicImageChange = () => {
    setUserProfileImagePreview('');
  };

  return (
    <>
      {routerPathname ?
        <>
          {/* {userprofileImg?.profileskin ?
            <> */}

          {router.pathname === '/changeuserinfo' ?
            <div className={style.changeuserinfobox}>
              {BasicImage.map((data) => (
                <>
                  <div className={style.profileskin}>
                    {!userProfileImagePreview && (
                      <Image src={data.imgUrl} alt="profileskin" width={70} height={70} />
                    )}
                    {userProfileImagePreview && (
                      <Image src={userProfileImagePreview} className={style.userProfileImagePreview} alt="userProfileImagePreview" width={70} height={70} />
                    )}
                    <Image className={style.profileskinbox} src={"/assets/images/profile/blue.svg"} alt="profileskin" width={70} height={70} />
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
              ))}
            </div>
            :
            <div className={style.userImage}>
              <Image src={"/assets/images/mypage/userImg.png"} alt="userProfileImagePreview" width={70} height={70} />
            </div>
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
    </>
  )
}
