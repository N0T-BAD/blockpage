import React from 'react'
import style from '@/components/pages/mypage/UserTopSection.module.css'
import UserNickName from '@/components/pages/mypage/UserNickName'
import UserIcon from '@/components/pages/mypage/UserIcon'

export default function UserTopSection() {
    return (
        <section className={style.UserTopSection}>
            <UserIcon />
            <UserNickName />
        </section>
    )
}
