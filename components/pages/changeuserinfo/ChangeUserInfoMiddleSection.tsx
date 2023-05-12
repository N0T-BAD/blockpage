import React from 'react'
import style from '@/components/pages/changeuserinfo/ChangeUserInfoMiddleSection.module.css'
import ChangeUserInfo from '@/components/pages/changeuserinfo/ChangeUserInfo'

export default function ChangeUserInfoMiddleSection() {
    return (
        <section className={style.ChangeUserInfoMiddleSection}>
            <ChangeUserInfo />
        </section>
    )
}
