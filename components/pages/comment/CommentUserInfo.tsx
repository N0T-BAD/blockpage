import React from 'react'
import Image from 'next/image'

import style from '@/components/pages/comment/GetComment.module.css'

export default function CommentUserInfo(props: { nickname?: string, date: string }) {
  return (
    <div className={style.profile}>
      <Image className={style.userImage1} src={"/assets/images/mypage/userImg.png"} alt={"userImg"} width={40} height={40} priority />
      <div>
        <p>{props.nickname}</p>
        {/* api 데이터 추가해야 함 */}
        <p className={style.date}>{props.date}</p>
      </div>
    </div>
  )
}
