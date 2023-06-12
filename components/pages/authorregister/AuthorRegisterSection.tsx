import React, { useState } from 'react'
import style from '@/components/pages/authorregister/AuthorRegisterSection.module.css'
import AuthorRegister from '@/components/pages/authorregister/AuthorRegister'
import AuthorNicknameAgreement from '@/components/pages/authorregister/AuthorNicknameAgreement'
import { authorNicknameDataType } from '@/types/authorNameDataType';

export default function AuthorRegisterSection() {


  const [inputData, setInputData] = useState<authorNicknameDataType>({
    creatorNickname: '',
  });

  const [signupbtn, setsignupbtn] = useState<boolean>(false);

  return (
    <>
      <section className={style.AuthorRegisterTopSection}>
        <AuthorRegister inputData={inputData} setInputData={setInputData} setsignupbtn={setsignupbtn} />
      </section>
      <section className={style.AuthorRegisterMiddleSection}>
        <AuthorNicknameAgreement inputData={inputData} setInputData={setInputData} signupbtn={signupbtn} />
      </section>
    </>
  )
}
