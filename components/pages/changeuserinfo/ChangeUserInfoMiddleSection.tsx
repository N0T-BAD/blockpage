import React from 'react'
import style from '@/components/pages/changeuserinfo/ChangeUserInfoMiddleSection.module.css'
import ChangeUserInto from './ChangeUserInto'

export default function ChangeUserInfoMiddleSection() {
    return (
        <section className={style.ChangeUserInfoMiddleSection}>
            <ChangeUserInto />
        </section>
    )
}
