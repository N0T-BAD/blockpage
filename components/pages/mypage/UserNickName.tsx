import Image from 'next/image'
import React from 'react'
import style from '@/components/pages/mypage/UserNickName.module.css'

export default function UserNickName() {
    return (
        <div className={style.usernicknameImg}>
            <Image src={"/assets/images/mypage/userImg.png"} alt={"userImg"} width={50} height={50} />
            <p>닉네임</p>
        </div>
    )
}
