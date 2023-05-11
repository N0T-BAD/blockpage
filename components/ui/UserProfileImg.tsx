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

  const routerPathname = router.pathname === '/mypage' || router.pathname === '/authorworkslist' || router.pathname === '/episodelist' || router.pathname === '/changeepisode' || router.pathname === '/episodedelete' || router.pathname === '/episodeinfo' || router.pathname === '/webtooninfo' || router.pathname === '/changewebtoon' || router.pathname === '/webtoondelete';

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

  return (
    <div className={style.userImage}>
      {routerPathname ?
        <>
          {/* {userprofileImg?.profileskin ?
            <> */}
          <Image className={style.userImage1} src={"/assets/images/mypage/userImg.png"} alt={"userImg"} width={70} height={70} />
          {router.pathname === '/changeuserinfo' ?
            <Image className={style.userImage2} src={"/assets/images/icons/imagebtn.svg"} alt={"userImgbtn"} width={25} height={25} />
            :
            ""
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
