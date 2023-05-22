import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import style from '@/components/pages/mypage/UserBottomMenu.module.css'
import { UserBottomMenuData } from '@/types/userBottomMenuData'
import { userBottomMenuData } from '@/data/userBottomMenuData'
import Link from 'next/link'
import { authorNameDataType } from '@/types/authorNameDataType'
import axios from 'axios'

export default function UserBottomMenu() {

    const [authorNickname, setAuthorNickname] = useState<authorNameDataType>(
        {
            author: '',
        }
    );

    useEffect(() => {
        axios.get('http://localhost:3000/api/v1/members?type=author')
            .then((res) => {
                setAuthorNickname(res.data);
            })
    }, [])


    return (
        <div className={style.UserBottomMenulist}>
            {authorNickname.author ?
                <>
                    {userBottomMenuData.map((data: UserBottomMenuData) => (
                        <div className={style.UserMenu} key={data.id}>
                            <Link href={data.path}>
                                <Image src={data.iconUrl} alt={data.name} width={30} height={30} />
                                <p>{data.name}</p>
                            </Link>
                        </div>
                    ))}
                    <div className={style.UserMenu}>
                        <Link href={"/authorworkslist"}>
                            <Image src={"/assets/images/icons/authorIcon.svg"} alt={"작품 관리"} width={30} height={30} />
                            <p>작품 관리</p>
                        </Link>
                    </div>
                </>
                :
                <>
                    {userBottomMenuData.map((data: UserBottomMenuData) => (
                        <div className={style.UserMenu} key={data.id}>
                            <Link href={data.path}>
                                <Image src={data.iconUrl} alt={data.name} width={30} height={30} />
                                <p>{data.name}</p>
                            </Link>
                        </div>
                    ))}
                    <div className={style.UserMenu}>
                        <Link href={"/authorregister"}>
                            <Image src={"/assets/images/icons/UserPlus.svg"} alt={"작가 등록"} width={30} height={30} />
                            <p>작가 등록</p>
                        </Link>
                    </div>
                </>
            }
        </div>
    )
}
