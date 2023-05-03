import React from 'react'
import style from '@/components/pages/genre/GenreTopBanner.module.css'

export default function GenreTopBanner() {
    return (
        <div className={style.GenreTop}>
            <div className={style.Genre}>
                <p className={style.active}>?요일</p>
            </div>
            <div className={style.Genre}>
                <p>인기</p>
            </div>
            <div className={style.Genre}>
                <p>액션</p>
            </div>
            <div className={style.Genre}>
                <p>로맨스</p>
            </div>
            <div className={style.Genre}>
                <p>판타지</p>
            </div>
            <div className={style.Genre}>
                <p>드라마</p>
            </div>
            <div className={style.Genre}>
                <p>무협</p>
            </div>
            <div className={style.Genre}>
                <p>로맨스판타지</p>
            </div>
            <div className={style.Genre}>
                <p>BL</p>
            </div>
            <div className={style.Genre}>
                <p>GL</p>
            </div>
        </div>
    )
}
