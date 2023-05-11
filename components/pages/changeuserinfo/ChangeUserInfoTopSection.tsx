import React from 'react'
import style from '@/components/pages/changeuserinfo/ChangeUserInfoTopSection.module.css'
import UserNickName from '@/components/pages/mypage/UserNickName'
export default function ChangeUserInfoTopSection() {
    return (
        <section className={style.ChangeUserInfoTopSection}>
            <UserNickName />
        </section>
    )
}
