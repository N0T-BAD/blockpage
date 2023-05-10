import Image from 'next/image'
import React from 'react'
import style from '@/components/pages/mypage/UserNickName.module.css'

export default function UserProfileImg() {
  return (
    <div className={style.userImage}>
      <Image className={style.userImage1} src={"/assets/images/mypage/userImg.png"} alt={"userImg"} width={70} height={70} />
      <Image className={style.userImage2} src={"/assets/images/icons/imagebtn.svg"} alt={"userImgbtn"} width={25} height={25} />
    </div>
  )
}
