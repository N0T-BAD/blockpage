import React from 'react'
import Image from 'next/image'

import style from '@/components/pages/comment/GetComment.module.css'
import Separator from '@/components/ui/Separator'
import CommentUserInfo from './CommentUserInfo'

import { commentDataType } from '@/types/commentDataType'

export default function Comment(props: {
  data: commentDataType,
  isAuthor: boolean,
  handlePush: () => void,
  handleDelete: () => void,
  handleLike: () => void,
  handleDislike: () => void,
  handleView?: () => void,
  handleReport: () => void,
}) {
  return (
    <>
      {
        <>
          <div className={style.topSection}>
            {
              props.data.isReply &&
                props.data.isReply ?
                <>
                  < CommentUserInfo
                    nickname={props.data.childNickname}
                    date={props.data.date}
                  />
                </> :
                < CommentUserInfo
                  nickname={props.data.parentsNickname}
                  date={props.data.date}
                />
            }
            <div className={style.topIcon}>
              {
                props.isAuthor ?
                  <Image
                    src={"/assets/images/icons/pushpin.svg"}
                    alt='고정핀'
                    width={12}
                    height={12}
                    onClick={props.handlePush}
                    priority
                  /> : ""
              }
              <Image
                src={"/assets/images/icons/trash.svg"}
                alt='쓰레기통'
                width={15}
                height={15}
                onClick={props.handleDelete}
                priority
              />
            </div>
          </div>
          <p className={style.commentTxt}>{props.data.content}</p>
          <div className={style.bottomSection}>
            {
              props.data.replyCount > 0
                ? <p onClick={props.handleView}>답글 {props.data.replyCount}</p>
                : <p>답글 달기</p>
            }
            <div className={style.bottomIcon}>
              <div onClick={props.handleReport}>
                <Image
                  src={"/assets/images/icons/siren.svg"}
                  alt='신고'
                  width={14}
                  height={14}
                  priority
                />
              </div>
              <div className={style.emotion}>
                <Image
                  src={"/assets/images/icons/thumbsup.svg"}
                  alt='좋아요'
                  width={12}
                  height={12}
                  onClick={props.handleLike}
                  priority
                />
                <p>{props.data.likesCount}</p>
              </div>
              <div className={style.emotion}>
                <Image
                  src={"/assets/images/icons/thumbsdown.svg"}
                  alt='싫어요'
                  width={12}
                  height={12}
                  onClick={props.handleDislike}
                  priority
                />
                <p>{props.data.dislikesCount}</p>
              </div>
            </div>
          </div>
          <Separator
            color='var(--bp-line-gray)'
            gutter={1}
          />
        </>
      }
    </>
  )
}
