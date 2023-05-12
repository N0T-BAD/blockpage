import React from 'react'
import Image from 'next/image'

import style from '@/components/pages/comment/GetComment.module.css'

export default function ReplyComment() {
  return (
    <>
      {
        <div className={style.replySection}>
          <div>
            <div className={style.profile}>
              <Image className={style.userImage1} src={"/assets/images/mypage/userImg.png"} alt={"userImg"} width={40} height={40} priority />
              <div>
                <p>김태근</p>
                <p className={style.date}>23-05-12 22:01</p>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}
