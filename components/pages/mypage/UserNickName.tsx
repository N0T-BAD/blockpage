import Image from 'next/image'
import React from 'react'
import style from '@/components/pages/mypage/UserNickName.module.css'
import UserIcon from './UserIcon'
import UserProfileImg from '@/components/ui/UserProfileImg'
import { useRouter } from 'next/router'

export default function UserNickName() {

    const router = useRouter();

    const RouterUrl = router.pathname === "/webtooninfo" || router.pathname === "/authorworkslist" || router.pathname === "/webtoondelete" || router.pathname === "/episodelist" || router.pathname === "/episodeinfo"
        || router.pathname === "/episodedelete" || router.pathname === '/changewebtoon';

    return (
        <div className={style.usernicknameImgBox}>
            <div className={style.usernicknameImg}>
                <UserProfileImg />
                <p className={style.usernickname}>사공사님</p>
                {router.pathname === '/mypage' ?
                    <p className={style.usernicknamechange}>닉네임 변경</p>
                    :
                    RouterUrl ?
                        ""
                        : ""
                }
                <UserIcon />
            </div>
        </div>
    )
}
