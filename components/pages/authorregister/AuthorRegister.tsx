import React, { useState } from 'react'
import style from '@/components/pages/authorregister/AuthorRegister.module.css'
import { AuthorSignupDataType } from '@/types/authorSignupDataType'
import { authorNameDataType } from '@/types/authorNameDataType'
import axios from 'axios';

interface ChildProps {
  inputData: authorNameDataType;
  setInputData: React.Dispatch<React.SetStateAction<authorNameDataType>>;
}

export default function AuthorRegister({ inputData, setInputData }: ChildProps) {

  const [errMsg, setErrMsg] = useState<AuthorSignupDataType>({
    nicknameErr: '',
  })

  const regex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|\*]+$/;

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputData({
      ...inputData,
      author: value
    })
    if (value.length < 2 || value.length > 10) {
      setErrMsg({ ...errMsg, nicknameErr: "작가명은 2자 이상 10자 이하로 입력해주세요." })
    } else if (regex.test(value)) {
      setErrMsg({ ...errMsg, nicknameErr: "" })
    } else {
      setErrMsg({ ...errMsg, nicknameErr: "작가명은 한글, 영문, 숫자만 입력 가능합니다." })
    }
  }

  const handleAuthorRegister = () => {
    if (inputData.author === "") {
      alert('작가명을 입력해주세요.')
    } else {
      axios.post('http://localhost:3000/api/author/nicknamecheck', {
        nickname: inputData.author,
      })
        .then((res) => {
          if (res.data === true) {
            alert("사용 가능한 작가명입니다.")
            setErrMsg({ ...errMsg, nicknameErr: "" })
          } else if (inputData.author.length < 2 || inputData.author.length > 10 || regex.test(inputData.author)) {
            alert('사용 불가능한 작가명입니다.');
            setErrMsg({ ...errMsg, nicknameErr: '이미 사용 중인 작가명입니다.' });
          }
        })
        .catch((err) => {
          alert("서버 에러가 발생하였습니다.")
        })
    }
  }

  return (
    <form>
      <div className={style.AuthorRegister}>
        <div className={style.AuthorName}>
          <p>작가명 :</p>
        </div>
        <div className={style.AuthorInput}>
          <input type='text' placeholder='작가명을 입력해주세요.' onChange={handleNicknameChange} />
          <p>{errMsg.nicknameErr}</p>
        </div>
        <div className={style.AuthorButton}>
          <button onClick={handleAuthorRegister}>중복 체크</button>
        </div>
      </div>
    </form>
  )
}
