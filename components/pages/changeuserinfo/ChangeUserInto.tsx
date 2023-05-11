import React from 'react'
import style from '@/components/pages/changeuserinfo/ChangeUserInto.module.css'

export default function ChangeUserInto() {
    return (
        <div className={style.ChangeUserIntoWrap}>
            <div className={style.profileSkinWrap}>
                <p>스킨 변경</p>
                <div className={style.profileSkinBox}>
                    <div className={style.profileSkinItem}>
                        <p>그린</p>
                    </div>
                    <div className={style.profileSkinItem}>
                        <p>오렌지</p>
                    </div>
                    <div className={style.profileSkinItem}>
                        <p>레드</p>
                    </div>
                    <div className={style.profileSkinItem}>
                        <p>블루</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
