import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import axios from 'axios'

import style from '@/components/pages/comment/GetComment.module.css'
import Separator from '@/components/ui/Separator'
import CommentUserInfo from './CommentUserInfo'
import { CommentDataType, CommentUserDataType } from '@/types/commentDataType'
import CommentInput from './CommentInput'

export default function Comment(props: {
  nickNameData: CommentUserDataType,
  commentData: CommentDataType,
  // isAuthor: boolean,
}) {
  const commentData = props.commentData;
  const [replyData, setReplyData] = useState<CommentDataType[]>([]);
  console.log(commentData)

  useEffect(() => {
    axios.get(`https://blockpage.site/comment-service/v1/comments/reply/${commentData.commentId}`)
      .then((res) => {
        console.log(res);
        setReplyData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);



  // const [replyData] = useState<CommentDataType[]>(replyDatas);
  const [openReply, setOpenReply] = useState<boolean>(false);

  const handleView = () => {
    setOpenReply(!openReply);
  }

  const handlePush = () => {
    console.log("handlePush onClick");
  }

  const handleDelete = () => {
    console.log("handleDelete onClick");
  }

  const handleLike = () => {
    console.log("handleLike onClick");
  }

  const handleDislike = () => {
    console.log("handleDislike onClick");
  }

  const handleReport = () => {
    //신고
    console.log("handleDeclaration onClick");
  }

  return (
    <>
      {
        <>
          <div className={style.commentSection}>
            {
              commentData.pin ?
                <p className={style.pinTxt}>작가님이 고정함</p>
                : ""
            }
            <div className={style.topSection}>
              {
                commentData.childNickname ?
                  <>
                    < CommentUserInfo
                      nickname={commentData.childNickname}
                      date={commentData.dateTime}
                    />
                  </> :
                  < CommentUserInfo
                    nickname={commentData.parentsNickname}
                    date={commentData.dateTime}
                  />
              }
              <div className={style.topIcon}>
                {
                  !commentData.childId &&
                  !commentData.pin &&
                  // props.isAuthor ?
                  <div onClick={handlePush}>
                    <Image
                      src={"/assets/images/icons/pushpin.svg"}
                      alt='고정핀'
                      width={15}
                      height={15}
                      priority
                    />
                  </div>
                  // : ""
                }
                <div onClick={handleDelete}>
                  <Image
                    src={"/assets/images/icons/trash.svg"}
                    alt='쓰레기통'
                    width={17}
                    height={17}
                    priority
                  />
                </div>
              </div>
            </div>
            <p className={style.commentTxt}>{commentData.content}</p>
            <div className={style.bottomSection}>
              {
                commentData.replyCount > 0 ?
                  <p onClick={handleView}>답글 {commentData.replyCount}</p> :
                  commentData.childId ?
                    <p></p> :
                    <p>답글 달기</p>
              }
              <div className={style.bottomIcon}>
                <div onClick={handleReport}>
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
                    onClick={handleLike}
                    priority
                  />
                  <p>{commentData.likesCount}</p>
                </div>
                <div className={style.emotion}>
                  <Image
                    src={"/assets/images/icons/thumbsdown.svg"}
                    alt='싫어요'
                    width={12}
                    height={12}
                    onClick={handleDislike}
                    priority
                  />
                  <p>{commentData.dislikesCount}</p>
                </div>
              </div>
            </div>
          </div>
          <Separator
            color='var(--bp-line-gray)'
          />
        </>
      }
      {
        openReply &&
        <section className={style.replyCommentSection}>
          <div className={style.replySection}>
            {
              replyData &&
              replyData.map((childData) => (
                commentData.parentsId === childData.parentsId &&
                <Comment
                  key={childData.commentId}
                  nickNameData={props.nickNameData}
                  commentData={childData}
                // isAuthor={props.isAuthor}
                />
              ))
            }
            <CommentInput
              nickNameData={props.nickNameData}
            />
          </div>
        </section>
      }
    </>
  )
}