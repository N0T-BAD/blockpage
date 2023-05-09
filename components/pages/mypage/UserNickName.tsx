import Image from 'next/image'
import React from 'react'
import style from '@/components/pages/mypage/UserNickName.module.css'
import UserIcon from './UserIcon'

export default function UserNickName() {
    return (
        <div className={style.usernicknameImgBox}>
            <div className={style.usernicknameImg}>
                <div className={style.userImage}>
                    <Image className={style.userImage1} src={"/assets/images/mypage/userImg.png"} alt={"userImg"} width={50} height={50} />
                    <Image className={style.userImage2} src={"/assets/images/icons/imagebtn.svg"} alt={"userImgbtn"} width={20} height={20} />
                </div>
                <p className={style.usernickname}>사공사님</p>
                <p className={style.usernicknamechange}>닉네임 변경</p>
                <UserIcon />
            </div>
        </div>
    )
}
