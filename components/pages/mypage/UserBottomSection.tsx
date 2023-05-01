import React from 'react'
import style from '@/components/pages/mypage/UserBottomSection.module.css'
import UserBottomMenu from './UserBottomMenu'

export default function UserBottomSection() {
    return (
        <section className={style.UserBottomSection}>
            <UserBottomMenu />
        </section>
    )
}
