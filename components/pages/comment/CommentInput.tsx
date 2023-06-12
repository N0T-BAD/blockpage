import React, { ChangeEvent, useState } from 'react'
import axios from 'axios';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

import style from '@/components/pages/comment/CommentInput.module.css'
import { ParentsCommentType } from '@/types/commentDataType';
import { userDataType } from '@/types/storeDataType';

export default function CommentInput(props: {
  userData: userDataType,
  parents?: ParentsCommentType,
}) {
  const { data: session } = useSession();
  const router = useRouter();
  const { episodeId } = router.query;
  const nickNameData = props.userData.nickname;
  const parents = props.parents;
  const [btnState, setBtnState] = useState(false);
  const [inputCount, setInputCount] = useState(0);
  const [inputText, setInputText] = useState("");
  const maxLength = 200;

  const handleBtn = () => {
    setBtnState(!btnState);
  }

  const handleReg = async () => {
    setBtnState(!btnState);
    setInputCount(0);

    if (inputText !== "") {
      if (parents) {
        axios.post(`https://blockpage.site/comment-service/v1/comments`, {
          parentsId: parents.parentsId,
          parentsNickname: parents.parentsNickname,
          parentsCommentId: parents.parentsCommentId,
          episodeId: episodeId,
          content: inputText,
          nickname: nickNameData,
        }, {
          headers: {
            memberId: session?.email,
          }
        })
          .then((res) => {
            console.log(res);
            router.reload();
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        axios.post(`https://blockpage.site/comment-service/v1/comments`, {
          episodeId: episodeId,
          content: inputText,
          nickname: nickNameData,
          profileImage: props.userData.profileImage,
          profileSkin: props.userData.profileSkin,

        }, {
          headers: {
            memberId: session?.email,
          }
        })
          .then((res) => {
            console.log(res);
            router.reload();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  }

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputCount(event.target.value.length);
    setInputText(event.target.value);
  }

  return (
    <div className={style.commentInput}>
      {
        btnState ?
          <form>
            <div className={style.commentDiv}>
              <textarea
                name="comment"
                id={style.commentTxt}
                cols={30}
                rows={10}
                maxLength={maxLength}
                onChange={handleChange}
              />
              <div className={style.commentBottom}>
                <div className={style.inputCount}>
                  <p className={style.count}>{inputCount}</p>
                  <p>/</p>
                  <p>{maxLength}</p>
                </div>
                <button type='button' className={style.commentBtn} onClick={handleReg}>등록</button>
              </div>
            </div>
          </form>
          : <p className={style.comment} onClick={handleBtn}>댓글을 입력해 주세요</p>
      }
    </div>
  )
}