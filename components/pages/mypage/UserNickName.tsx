import Image from 'next/image'
import React from 'react'
import style from '@/components/pages/mypage/UserNickName.module.css'
import UserIcon from './UserIcon'
import UserProfileImg from '@/components/ui/UserProfileImg'

export default function UserNickName() {
    return (
        <div className={style.usernicknameImgBox}>
            <div className={style.usernicknameImg}>
                <UserProfileImg />
                <p className={style.usernickname}>사공사님</p>
                <p className={style.usernicknamechange}>닉네임 변경</p>
                <UserIcon />
            </div>
        </div>
    )
}
