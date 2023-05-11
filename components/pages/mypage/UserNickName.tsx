import React, { use, useEffect, useState } from 'react'
import style from '@/components/pages/mypage/UserNickName.module.css'
import UserIcon from './UserIcon'
import UserProfileImg from '@/components/ui/UserProfileImg'
import axios from 'axios'
import { ChangeUserDataType } from '@/types/changeUserDataType'
import { authorNicknameDataType } from '@/types/authorNameDataType'
import { useRouter } from 'next/router'
import { userNickName } from '@/data/userNickName'
import { creatorNickName } from '@/data/creatorNickName'

export default function UserNickName() {

    const router = useRouter();

    const RouterUrl = router.pathname === "/webtooninfo" || router.pathname === "/authorworkslist" || router.pathname === "/webtoondelete" || router.pathname === "/episodelist" || router.pathname === "/episodeinfo"
        || router.pathname === "/episodedelete" || router.pathname === '/changewebtoon';


    const [userNickname, setUserNickname] = useState<ChangeUserDataType>(
        {
            nickname: '',
        }
    );

    const [authorNickName, setauthorNickName] = useState<authorNicknameDataType>(
        {
            creator_nickname: '',
        }
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserNickname({
            ...userNickname,
            nickname: e.target.value,
        });
    };

    // const [userNickname, setUserNickname] = useState<ChangeUserDataType>(
    //     {
    //         nickname: '',
    //     }
    // );

    // const [authorNickname, setAuthorNickname] = useState<authorNicknameDataType>(
    //     {
    //         creator_nickname: '',
    //     }
    // );

    // useEffect(() => {
    //     axios.get('http://localhost:3000/api/v1/members?type=nickname')
    //         .then((res) => {
    //             setUserNickname(res.data);
    //         })
    // }, [])

    // useEffect(() => {
    //     axios.get('http://localhost:3000/api/v1/members?type=author')
    //         .then((res) => {
    //             setAuthorNickname(res.data);
    //         })
    // }, [])


    return (
        <>
            <div className={style.usernicknameImgBox}>
                <div className={style.usernicknameImg}>
                    <UserProfileImg />
                    {RouterUrl ?
                        <>
                            {
                                authorNickName &&
                                <>
                                    {creatorNickName.map((data) => (
                                        <>
                                            <p className={style.usernickname}>{data.creator_nickname}</p>
                                        </>
                                    ))}
                                </>
                            }
                        </>
                        :
                        <>
                            {userNickname &&
                                <>
                                    {userNickName.map((data) => (
                                        router.pathname === '/changeuserinfo' ?
                                            <input className={style.usernickname} type='text' defaultValue={data.nickname} onChange={handleChange} />
                                            :
                                            <p className={style.usernickname}>{data.nickname}</p>
                                    ))}
                                </>
                            }
                        </>
                    }
                    <UserIcon />
                </div>
            </div>
        </>
    )
}
