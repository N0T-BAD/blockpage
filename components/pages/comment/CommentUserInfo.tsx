import React from 'react'
import Image from 'next/image'

import style from '@/components/pages/comment/GetComment.module.css'
import { CommentDataType } from '@/types/commentDataType'

export default function CommentUserInfo(props: { commentData: CommentDataType, nickname: string, date: string }) {
  return (
    <div className={style.profile}>
      <div className={style.userProfileDiv}>
        <div className={style.userProfileImgDiv}>
          <Image
            src={props.commentData.profileImage}
            alt='유저 프로필 이미지'
            width={40}
            height={40}
            priority
          />
        </div>
        <div className={style.selectedUserSkin}>
          {
            props.commentData.profileSkin !== '' &&
            <Image
              src={props.commentData.profileSkin}
              alt='스킨 이미지'
              width={40}
              height={40}
              priority
            />
          }
        </div>
      </div>
      <div className={style.profileTxt}>
        <p>{props.nickname}</p>
        <p className={style.date}>{props.date}</p>
      </div>
    </div>
  )
}
