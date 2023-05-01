import React from 'react'
import UserNickName from './UserNickName'
import style from '@/components/pages/mypage/UserTopSection.module.css'

export default function UserTopSection() {
    return (
        <section className={style.UserTopSection}>
            <UserNickName />
        </section>
    )
}
