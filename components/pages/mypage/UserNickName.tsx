import React, { use, useEffect, useState } from 'react'
import style from '@/components/pages/mypage/UserNickName.module.css'
import UserIcon from './UserIcon'
import UserProfileImg from '@/components/ui/UserProfileImg'
import axios from 'axios'
import { ChangeUserDataType, profileskinDataType } from '@/types/changeUserDataType'
import { authorNicknameDataType } from '@/types/authorNameDataType'
import { useRouter } from 'next/router'
import { userNickName } from '@/data/userNickName'
import { creatorNickName } from '@/data/creatorNickName'

// interface ChildProps {
//     profileSkinColor: profileskinDataType;
//     setProfileSkinColor: React.Dispatch<React.SetStateAction<profileskinDataType>>;
// }

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
                                            <></>
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
