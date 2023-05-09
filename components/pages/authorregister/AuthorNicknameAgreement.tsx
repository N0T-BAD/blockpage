import React, { useState } from 'react'
import style from '@/components/pages/authorregister/AuthorNicknameAgreement.module.css'
import { useRouter } from 'next/router';
import { AuthorNicknameCheckDataType } from '@/types/authorSignupDataType';
import axios from 'axios';

interface ChildProps {
  inputData: AuthorNicknameCheckDataType;
  setInputData: React.Dispatch<React.SetStateAction<AuthorNicknameCheckDataType>>;
}

export default function AuthorNicknameAgreement({ inputData, setInputData }: ChildProps) {

  const router = useRouter();



  const handleAuthorSignup = () => {
    axios.post('http://localhost:3000/api/author/signup', {
      nickname: inputData.nickname,
    })
      .then((res) => {
        if (res.data === true) {
          alert("작가 등록이 완료되었습니다.")
          router.push('/authorworkslist')
        } else {
          alert('작가 등록에 실패하였습니다.');
        }
      })
      .catch((err) => {
        alert("서버 에러가 발생하였습니다.")
      })
  }

  return (
    <>
      <div className={style.AuthorNicknameAgreementBox}>
        <p>작가명은 2자 이상 10자 이하로 입력해주세요.</p>
        <p>작가명은 한글, 영문, 숫자만 입력 가능합니다.</p>
        <p>이미 등록한 작가명은 등록할 수 없습니다.</p>
      </div>
      <div className={style.AuthorButton}>
        <div className={style.AuthorSignupButtonBox}>
          <button className={style.AuthorSignupButton} onClick={handleAuthorSignup}>작가 등록</button>
        </div>
      </div>
    </>
  )
}
