import React, { useEffect, useState } from 'react'
import style from '@/components/pages/mypage/UserNickName.module.css'
import UserIcon from './UserIcon'
import UserProfileImg from '@/components/ui/UserProfileImg'
import { ChangeUserDataType } from '@/types/changeUserDataType'
import axios from 'axios'
import { authorNicknameDataType } from '@/types/authorNameDataType'

export default function UserNickName() {

    const [userNickname, setUserNickname] = useState<ChangeUserDataType>(
        {
            nickname: '',
        }
    );

    const [authorNickname, setAuthorNickname] = useState<authorNicknameDataType>(
        {
            creator_nickname: '',
        }
    );

    useEffect(() => {
        axios.get('http://localhost:3000/api/v1/members?type=nickname')
            .then((res) => {
                setUserNickname(res.data);
            })
    }, [])

    useEffect(() => {
        axios.get('http://localhost:3000/api/v1/members?type=author')
            .then((res) => {
                setAuthorNickname(res.data);
            })
    }, [])

    return (
        <>
            <div className={style.usernicknameImgBox}>
                <div className={style.usernicknameImg}>
                    <UserProfileImg />
                    {userNickname.nickname ?
                        <p className={style.usernickname}>{userNickname.nickname}</p>
                        :
                        authorNickname.creator_nickname &&
                        <p className={style.usernickname}>{authorNickname.creator_nickname}</p>
                    }
                    <UserIcon />
                </div>
            </div>
        </>
    )
}
