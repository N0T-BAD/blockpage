import React from 'react'
import style from '@/components/pages/mypage/UserBottomSection.module.css'
import UserBottomMenu from '@/components/pages/mypage/UserBottomMenu'

export default function UserBottomSection() {
    return (
        <section className={style.UserBottomSection}>
            <UserBottomMenu />
        </section>
    )
}
