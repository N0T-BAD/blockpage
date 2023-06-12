import React, { Dispatch } from 'react'
import style from '@/components/pages/authorregister/AuthorNicknameAgreement.module.css'
import { useRouter } from 'next/router';
import { authorNicknameDataType } from '@/types/authorNameDataType';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Swal from 'sweetalert2';

interface ChildProps {
  inputData: authorNicknameDataType;
  setInputData: React.Dispatch<React.SetStateAction<authorNicknameDataType>>;
  signupbtn: boolean;
}

export default function AuthorNicknameAgreement({ inputData, setInputData, signupbtn }: ChildProps) {

  const router = useRouter();
  console.log(inputData.creatorNickname)

  const { data: session } = useSession()
  // const role = sessionStorage.getItem('role');

  const handleAuthorSignup = async () => {

    try {
      const formData = new FormData();
      formData.append("creatorNickname", inputData.creatorNickname);

      console.log(inputData.creatorNickname)
      console.log(session)

      //put - formdata 못 넣음. 데이터를 넣을때 사용.

      console.log(formData.get('creatorNickname'))

      const res = await fetch('https://blockpage.site/member-service/v1/members?type=author', {
        method: 'PUT',
        body: formData,
        headers: {
          memberId: session?.email || '',
          // role: role,
        },
      })

      const data = await res.json()
      console.log(data)
      if (data) {
        Swal.fire({
          icon: 'success',
          title: '작가 등록이 완료되었습니다.',
          showConfirmButton: true,
        })
          .then(() => {
            router.push('/authorworkslist')
          })
      } else {
        Swal.fire({
          icon: 'success',
          title: '작가 등록에 실패하였습니다.',
          showConfirmButton: true,
        })
      }
    } catch (err) {
      console.log(err)
      Swal.fire({
        icon: 'success',
        title: '작가 등록에 실패하였습니다.',
        showConfirmButton: true,
      })
    }
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
          {signupbtn === true ?
            <button type="button" className={style.AuthorSignupButton} onClick={handleAuthorSignup}>작가 등록</button>
            :
            <button type="button" className={style.AuthorSignupButton} disabled>작가 등록</button>
          }
        </div>
      </div>
    </>
  )
}
