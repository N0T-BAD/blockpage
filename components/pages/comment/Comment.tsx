import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import axios from 'axios'

import style from '@/components/pages/comment/GetComment.module.css'
import Separator from '@/components/ui/Separator'
import CommentUserInfo from './CommentUserInfo'
import { CommentDataType, CommentEmotionDataType, ParentsCommentType } from '@/types/commentDataType'
import CommentInput from './CommentInput'
import ReportModal from '@/components/modals/ReportModal'
import ConfirmModal from '@/components/modals/ConfirmModal'
import { userDataType } from '@/types/storeDataType'

export default function Comment(props: {
  userData: userDataType,
  commentData: CommentDataType,
}) {
  const { data: session } = useSession();

  const router = useRouter();
  const { episodeId } = router.query;
  const { author } = router.query;

  const nickNameData = props.userData.nickname;
  const commentData = props.commentData;
  const [replyData, setReplyData] = useState<CommentDataType[]>([]);

  const [openReply, setOpenReply] = useState<boolean>(false);

  const [likeState, setLikeState] = useState<boolean>(false);
  const [disLikeState, setDisLikeState] = useState<boolean>(false);

  const [showCommentModal, setShowCommentModal] = useState<boolean>();
  const [reportValue, setReportValue] = useState<number>(0);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

  const [commentEmotionData, setCommentEmotionData] = useState<CommentEmotionDataType>({
    id: 0,
    commentId: 0,
    emotion: false,
    choice: false,
  });

  const parentsJson: ParentsCommentType = {
    parentsId: commentData.parentsId,
    parentsNickname: commentData.parentsNickname,
    parentsCommentId: commentData.commentId,
  }

  useEffect(() => {
    if (session) {
      axios.all([
        axios.get(`https://blockpage.site/comment-service/v1/comments/reply/${commentData.commentId}`),
        axios.get(`https://blockpage.site/member-service/v1/emotions?commentId=${commentData.commentId}`, {
          headers: {
            memberId: session.email,
          }
        })]
      )
        .then(
          axios.spread((res1, res2) => {
            setReplyData(res1.data.data);
            setCommentEmotionData(res2.data.data);
          })
        )
        .catch((err) => {
          console.log(err);
        });
    }
  }, [session?.email, likeState]);

  const handleView = () => {
    setOpenReply(!openReply);
  }

  const handlePush = () => {
    // pin
    axios.patch(`https://blockpage.site/comment-service/v1/comments/${commentData.commentId}`, {
      withCredentials: true
    })
      .then((res) => {
        router.reload();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const handleDelete = () => {
    axios.delete(`https://blockpage.site/comment-service/v1/comments/${commentData.commentId}`)
      .then((res) => {
        router.reload();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const handleLike = () => {
    if (likeState === false) {
      axios.post(`https://blockpage.site/member-service/v1/emotions`, {
        episodeId: episodeId,
        commentId: commentData.commentId,
        emotion: true,
      }, {
        headers: {
          memberId: session?.email,
        }
      })
        .then((res) => {
          setLikeState(!likeState);
          router.reload();
        })
        .catch((err) => {
          console.log(err);
        })
    }
    else if (likeState === true) {
      axios.post(`https://blockpage.site/member-service/v1/emotions${commentEmotionData?.commentId}`, {
        headers: {
          email: session?.email,
        }
      })
        .then((res) => {
          setLikeState(!likeState);
          router.reload();
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }

  const handleDislike = () => {
    if (disLikeState === false) {
      axios.post(`https://blockpage.site/member-service/v1/emotions`, {
        episodeId: episodeId,
        commentId: commentData.commentId,
        emotion: false,
      }, {
        headers: {
          memberId: session?.email,
        }
      })
        .then((res) => {
          setDisLikeState(!disLikeState);
          router.reload();
        })
        .catch((err) => {
          console.log(err);
        })
    } else if (disLikeState === true) {
      axios.post(`https://blockpage.site/member-service/v1/emotions${commentEmotionData?.commentId}`, {
        headers: {
          email: session?.email,
        }
      })
        .then((res) => {
          setDisLikeState(!disLikeState);
          router.reload();
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }

  const handleReport = () => {
    axios.post(`https://blockpage.site/comment-service/v1/reports`, {
      memberId: session?.email,
      commentId: commentData.commentId,
      memberNickname: nickNameData,
      content: commentData.content,
      reportType: reportValue,
    }, {
      headers: {
        memberId: session?.email,
      }
    })
      .then((res) => {
        setShowCommentModal(!showCommentModal);
        router.reload();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const handleShowReportModal = () => {
    setShowCommentModal(!showCommentModal);
    setReportValue(0);
  }

  return (
    <>
      {
        showCommentModal &&
        <ReportModal
          handleShowReportModal={handleShowReportModal}
          handleReport={handleReport}
          setReportValue={setReportValue}
        />
      }
      {
        showDeleteModal &&
        <ConfirmModal
          text1={'댓글'}
          text2={'을'}
          text3={'삭제하시겠습니까?'}
          setShowModal={setShowDeleteModal}
          handleconfirm={handleDelete}
        />
      }
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
                    <CommentUserInfo
                      commentData={commentData}
                      nickname={commentData.childNickname}
                      date={commentData.dateTime}
                    />
                  </> :
                  <CommentUserInfo
                    commentData={commentData}
                    nickname={commentData.parentsNickname}
                    date={commentData.dateTime}
                  />
              }
              <div className={style.topIcon}>
                {
                  !commentData.childId &&
                    !commentData.pin &&
                    author == nickNameData ?
                    <div onClick={handlePush}>
                      <Image
                        src={"/assets/images/icons/pushpin.svg"}
                        alt='고정핀'
                        width={15}
                        height={15}
                        priority
                      />
                    </div>
                    : ""
                }
                {
                  session?.email === commentData.childId ?
                    <div onClick={() => setShowDeleteModal(true)}>
                      <Image
                        src={"/assets/images/icons/trash.svg"}
                        alt='쓰레기통'
                        width={17}
                        height={17}
                        priority
                      />
                    </div> :
                    !commentData.childId &&
                      session?.email === commentData.parentsId ?
                      <div onClick={() => setShowDeleteModal(true)}>
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
                    <p onClick={handleView}>답글 달기</p>
              }
              <div className={style.bottomIcon}>
                {
                  session?.email !== commentData.parentsId ?
                    <div onClick={handleShowReportModal}>
                      <Image
                        src={"/assets/images/icons/siren.svg"}
                        alt='신고'
                        width={14}
                        height={14}
                        priority
                      />
                    </div>
                    : ""
                }
                <div className={style.emotion}>
                  <Image
                    src={"/assets/images/icons/thumbsup.svg"}
                    alt='좋아요'
                    width={12}
                    height={12}
                    onClick={handleLike}
                    priority
                  />
                  <p className={commentEmotionData.choice && commentEmotionData.emotion ? `${style.likeCount}` : ""}>{commentData.likesCount}</p>
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
                  <p className={commentEmotionData.choice && !commentEmotionData.emotion ? `${style.disLikeCount}` : ""}>{commentData.dislikesCount}</p>
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
                  userData={props.userData}
                  commentData={childData}
                />
              ))
            }
            <CommentInput
              userData={props.userData}
              parents={parentsJson}
            />
          </div>
        </section>
      }
    </>
  )
}