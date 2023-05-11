import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import style from '@/components/pages/mypage/UserNickName.module.css'
import UserIcon from './UserIcon'
import UserProfileImg from '@/components/ui/UserProfileImg'
import { useRouter } from 'next/router'
import { ChangeUserDataType } from '@/types/changeUserDataType'
import axios from 'axios'

export default function UserNickName() {

    const [userNickname, setUserNickname] = useState<ChangeUserDataType>(
        {
            nickname: '',
        }
    );

    useEffect(() => {
        axios.get('http://localhost:3000/api/v1/members?type=nickname')
            .then((res) => {
                setUserNickname(res.data);
            })
    }, [])

    return (
        <>
            <div className={style.usernicknameImgBox}>
                {userNickname.nickname ?
                    <div className={style.usernicknameImg}>
                        <UserProfileImg />
                        <p className={style.usernickname}>{userNickname.nickname}</p>
                        <UserIcon />
                    </div>
                    :
                    ""
                }
            </div>
        </>
    )
}
