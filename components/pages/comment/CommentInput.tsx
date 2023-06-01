import React, { ChangeEvent, useEffect, useState } from 'react'
import axios from 'axios';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

import style from '@/components/pages/comment/CommentInput.module.css'
import { CommentUserDataType } from '@/types/commentDataType';

export default function CommentInput(props: { nickNameData: CommentUserDataType }) {
  const { data: session } = useSession();
  const router = useRouter();
  const { episodeId } = router.query;
  const nickNameData = props.nickNameData;

  // const email = session?.email || "";
  // const nickName = props.nickName;

  const [btnState, setBtnState] = useState(false);
  const [inputCount, setInputCount] = useState(0);
  const [inputText, setInputText] = useState("");
  const maxLength = 300;

  const handleBtn = () => {
    setBtnState(!btnState);
  }

  const handleReg = async () => {
    setBtnState(!btnState);
    setInputCount(0);

    // const encodedMemberId = encodeURIComponent(session?.email);
    const encodedNickName = encodeURIComponent(nickNameData);

    // const encodedNickName = Buffer.from(props.nickName, 'utf-8').toString('iso-8859-1');

    //댓글등록
    console.log(typeof (Number(episodeId)));
    console.log(inputText);
    console.log(session?.email);
    console.log(session?.nickname);
    console.log(nickNameData);

    axios.post(`https://blockpage.site/comment-service/v1/comments`, {
      episodeId: episodeId,
      content: inputText,
    }, {
      headers: {
        memberId: session?.email,
        nickName: encodedNickName,
      }
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputCount(event.target.value.length);
    setInputText(event.target.value);
  }

  return (
    <div>
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