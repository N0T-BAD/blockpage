import React from 'react'
import UserNickName from './UserNickName'
import style from '@/components/pages/mypage/UserTopSection.module.css'
import UserIcon from './UserIcon'

export default function UserTopSection() {
    return (
        <section className={style.UserTopSection}>
            <UserIcon />
            <UserNickName />
        </section>
    )
}
