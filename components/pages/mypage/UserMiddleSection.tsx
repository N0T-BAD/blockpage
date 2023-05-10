import React from 'react'
import style from '@/components/pages/mypage/UserMiddleSection.module.css'
import UserHoldBlock from '@/components/pages/mypage/UserHoldBlock'

export default function UserMiddleSection() {
    return (
        <section className={style.UserMiddleSection}>
            <UserHoldBlock />
        </section>
    )
}
