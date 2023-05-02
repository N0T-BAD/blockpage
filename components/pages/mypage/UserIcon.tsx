import React from 'react'
import style from '@/components/pages/mypage/UserIcon.module.css'

export default function UserIcon() {
    return (
        <div className={style.reader_author_box}>
            <div className={style.reader}>
                <p>독자</p>
            </div>
            <div className={style.author}>
                <p>작가</p>
            </div>
        </div>
    )
}
