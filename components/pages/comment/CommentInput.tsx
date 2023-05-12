import React, { ChangeEvent, useState } from 'react'

import style from '@/components/pages/comment/CommentInput.module.css'

export default function CommentInput() {

  const [btnState, setBtnState] = useState(false);
  const [commentCnt, setCommentCnt] = useState(0);
  const [inputCount, setInputCount] = useState(0);
  const maxLength = 300;

  const handleBtn = () => {
    setBtnState(!btnState);
  }

  const handleReg = () => {
    setBtnState(!btnState);
    setInputCount(0);
    //댓글등록
  }

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputCount(event.target.value.length);
  }

  return (
    <div>
      <p className={style.totalComment}>{commentCnt}개의 댓글</p>
      {
        btnState
          ? <form action="">
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
                <button type='submit' className={style.commentBtn} onClick={handleReg}>등록</button>
              </div>
            </div>
          </form>
          : <p className={style.comment} onClick={handleBtn}>댓글을 입력해 주세요</p>
      }
    </div>
  )
}