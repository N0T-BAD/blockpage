import React, { useState } from 'react'
import style from '@/components/pages/authorregister/AuthorRegister.module.css'
import { AuthorSignupDataType } from '@/types/authorSignupDataType'
import { authorNicknameDataType } from '@/types/authorNameDataType'
import axios from 'axios';
import { useSession } from 'next-auth/react';

interface ChildProps {
  inputData: authorNicknameDataType;
  setInputData: React.Dispatch<React.SetStateAction<authorNicknameDataType>>;
}

export default function AuthorRegister({ inputData, setInputData }: ChildProps) {

  const { data: session } = useSession()
  // const role = sessionStorage.getItem('role');

  const [errMsg, setErrMsg] = useState<AuthorSignupDataType>({
    nicknameErr: '',
  })

  const regex = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|\*]+$/;

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputData({
      ...inputData,
      creatorNickname: value
    })
    if (value.length < 2 || value.length > 10) {
      setErrMsg({ ...errMsg, nicknameErr: "작가명은 2자 이상 10자 이하로 입력해주세요." })
    } else if (regex.test(value)) {
      setErrMsg({ ...errMsg, nicknameErr: "" })
    } else {
      setErrMsg({ ...errMsg, nicknameErr: "작가명은 한글, 영문, 숫자만 입력 가능합니다." })
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputData.creatorNickname === "") {
      alert('작가명을 입력해주세요.')
    } else {
      axios.get('https://blockpage.site/member-service/v1/members?type=nickname',
        {
          headers: {
            'Content-Type': 'application/json',
            memberId: session?.email,
            // role: role,
          },
          params: {
            creatorNickname: inputData.creatorNickname,
          }
        })
        .then((res) => {
          console.log(res)
          alert("사용 가능한 작가명입니다.")
        })
        .catch((err) => {
          if (err.response.status === 409) {
            alert("이미 사용 중인 작가명입니다.")
          }
        })
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={style.AuthorRegister}>
        <div className={style.AuthorName}>
          <p>작가명 :</p>
        </div>
        <div className={style.AuthorInput}>
          <input type='text' name="creatorNickname" placeholder='작가명을 입력해주세요.' onChange={handleNicknameChange} />
          <p>{errMsg.nicknameErr}</p>
        </div>
        <div className={style.AuthorButton}>
          <button type='submit'>중복 체크</button>
        </div>
      </div>
    </form>
  )
}
