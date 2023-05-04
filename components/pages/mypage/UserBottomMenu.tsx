import Image from 'next/image'
import React from 'react'
import style from '@/components/pages/mypage/UserBottomMenu.module.css'
import { UserBottomMenuData } from '@/types/userBottomMenuData'
import { userBottomMenuData } from '@/data/userBottomMenuData'
import Link from 'next/link'

export default function UserBottomMenu() {
    return (
        <>
            {
                userBottomMenuData.map((data: UserBottomMenuData) => (
                    <Link href={data.path}>
                        <div className={style.UserMenu} key={data.id}>
                            <Image src={data.iconUrl} alt={data.name} width={30} height={30} />
                            <p>{data.name}</p>
                        </div>
                    </Link>
                ))
            }
        </>
    )
}
