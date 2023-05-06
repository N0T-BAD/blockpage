import React from 'react'
import style from '@/components/pages/authorregister/AuthorNicknameAgreement.module.css'
import AuthorSignupButton from './AuthorSignupButton'

export default function AuthorNicknameAgreement() {
  return (
    <>
      <div className={style.AuthorNicknameAgreementBox}>
        <p>작가명은 2자 이상 10자 이하로 입력해주세요.</p>
        <p>작가명은 한글, 영문, 숫자만 입력 가능합니다.</p>
        <p>이미 등록한 작가명은 등록할 수 없습니다.</p>
      </div>
      <div className={style.AuthorButton}>
        <AuthorSignupButton />
      </div>
    </>
  )
}
