import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import axios from 'axios'

import style from '@/components/pages/comment/GetComment.module.css'
import Separator from '@/components/ui/Separator'
import CommentUserInfo from './CommentUserInfo'
import { CommentDataType, CommentUserDataType, ParentsCommentType } from '@/types/commentDataType'
import CommentInput from './CommentInput'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function Comment(props: {
  nickNameData: CommentUserDataType,
  commentData: CommentDataType,
  // isAuthor: boolean,
}) {
  const { data: session } = useSession();
  const router = useRouter();
  const { episodeId } = router.query;
  const commentData = props.commentData;
  const [replyData, setReplyData] = useState<CommentDataType[]>([]);
  const [openReply, setOpenReply] = useState<boolean>(false);
  const parentsJson: ParentsCommentType = {
    parentsId: commentData.parentsId,
    parentsNickname: commentData.parentsNickname,
    parentsCommentId: commentData.commentId,
  }
  const [likeState, setLikeState] = useState<boolean>();
  const [disLikeState, setDisLikeState] = useState<boolean>();

  console.log(commentData)
  console.log(session?.email)

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

  const handleView = () => {
    setOpenReply(!openReply);
  }

  const handlePush = () => {
    // pin
    console.log("handlePush onClick");
    axios.patch(`https://blockpage.site/comment-service/v1/comments/${commentData.commentId}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const handleDelete = () => {
    console.log("handleDelete onClick");
    axios.delete(`https://blockpage.site/comment-service/v1/comments/${commentData.commentId}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const handleLike = () => {
    console.log("handleLike onClick");
    if (likeState) {
      axios.post(`https://blockpage.site/member-service/v1/emotions`, {
        episodeId: episodeId,
        commentId: commentData.commentId,
        emotion: true,
      }, {
        headers: {
          email: session?.email,
        }
      })
        .then((res) => {
          console.log(res);
          setLikeState(!likeState);
        })
        .catch((err) => {
          console.log(err);
        })
    } else if (!likeState) {
      // axios.post(`https://blockpage.site/member-service/v1/emotions${emotionId}`, {
      //   headers: {
      //     email: session?.email,
      //   }
      // })
      //   .then((res) => {
      //     console.log(res);
      //     setLikeState(!likeState);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   })
    }
  }

  const handleDislike = () => {
    console.log("handleDislike onClick");
    if (disLikeState) {
      axios.post(`https://blockpage.site/member-service/v1/emotions`, {
        episodeId: episodeId,
        commentId: commentData.commentId,
        emotion: false,
      }, {
        headers: {
          email: session?.email,
        }
      })
        .then((res) => {
          console.log(res);
          setLikeState(!disLikeState);
        })
        .catch((err) => {
          console.log(err);
        })
    } else if (!disLikeState) {
      // axios.post(`https://blockpage.site/member-service/v1/emotions${emotionId}`, {
      //   headers: {
      //     email: session?.email,
      //   }
      // })
      //   .then((res) => {
      //     console.log(res);
      //     setLikeState(!disLikeState);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   })
    }
  }

  const handleReport = () => {
    //신고
    console.log("handleDeclaration onClick");
    axios.post(`https://blockpage.site/comment-service/v1/reports`, {
      comment_id: commentData.commentId,
    }, {
      headers: {
        memberId: session?.email,
      }
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
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
                {
                  session?.email === commentData.childId ?
                    <div onClick={handleDelete}>
                      <Image
                        src={"/assets/images/icons/trash.svg"}
                        alt='쓰레기통'
                        width={17}
                        height={17}
                        priority
                      />
                    </div> :
                    session?.email === commentData.parentsId ?
                      <div onClick={handleDelete}>
                        <Image
                          src={"/assets/images/icons/trash.svg"}
                          alt='쓰레기통'
                          width={17}
                          height={17}
                          priority
                        />
                      </div>
                      : ""
                }
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
              parents={parentsJson}
            />
          </div>
        </section>
      }
    </>
  )
}