import React, { useState } from 'react'
import style from '@/components/pages/authorregister/AuthorRegister.module.css'
import { AuthorNicknameCheckDataType, AuthorSignupDataType } from '@/types/authorSignupDataType'

export default function AuthorRegister() {

  const [errMsg, setErrMsg] = useState<AuthorSignupDataType>({
    nicknameErr: '',
  })

  const [inputData, setInputData] = useState<AuthorNicknameCheckDataType>({
    nickname: '',
  })

  const handleAuthorRegister = () => {
    if (inputData.nickname === "") {
      alert('작가명을 입력해주세요.')
    } else if (inputData.nickname.length < 10 || inputData.nickname.length > 2) {
      if (/^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|\*]+$/.test(inputData.nickname)) {
        setErrMsg({ ...errMsg, nicknameErr: "작가명은 한글, 영문, 숫자만 입력 가능합니다." })
      }
      setErrMsg({ ...errMsg, nicknameErr: "작가명은 2자 이상 10자 이하로 입력해주세요." })
    }
  }

  return (
    <form>
      <div className={style.AuthorRegister}>
        <div className={style.AuthorName}>
          <p>작가명</p>
        </div>
        <div className={style.AuthorInput}>
          <input type='text' placeholder='작가명을 입력해주세요.' />
          <p>{errMsg.nicknameErr}</p>
        </div>
        <div className={style.AuthorButton}>
          <button onClick={handleAuthorRegister}>중복 체크</button>
        </div>
      </div>
    </form>
  )
}
