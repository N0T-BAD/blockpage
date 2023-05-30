import React from 'react'
import style from '@/components/pages/authorregister/AuthorNicknameAgreement.module.css'
import { useRouter } from 'next/router';
import { authorNicknameDataType } from '@/types/authorNameDataType';
import { useSession } from 'next-auth/react';

interface ChildProps {
  inputData: authorNicknameDataType;
  setInputData: React.Dispatch<React.SetStateAction<authorNicknameDataType>>;
}

export default function AuthorNicknameAgreement({ inputData, setInputData }: ChildProps) {

  const router = useRouter();
  console.log(inputData.creatorNickname)

  const { data: session } = useSession()
  // const role = sessionStorage.getItem('role');

  const handleAuthorSignup = async () => {
    try {
      const formData = new FormData();
      formData.append('requestMember', JSON.stringify({ creatorNickname: inputData.creatorNickname }));

      const res = await fetch('https://blockpage.site/member-service/v1/members?type=author', {
        method: 'PUT',
        body: formData,
        headers: {
          memberId: session?.email || '',
        },

      });

      if (res.status === 200) {
        alert('작가 등록이 완료되었습니다.');
        router.push('/authorworkslist');
      } else {
        alert('작가 등록에 실패하였습니다.');
      }
    } catch (err) {
      console.log(err);
      alert('작가 등록에 실패하였습니다.');
    }
  };

  return (
    <>
      <div className={style.AuthorNicknameAgreementBox}>
        <p>작가명은 2자 이상 10자 이하로 입력해주세요.</p>
        <p>작가명은 한글, 영문, 숫자만 입력 가능합니다.</p>
        <p>이미 등록한 작가명은 등록할 수 없습니다.</p>
      </div>
      <div className={style.AuthorButton}>
        <div className={style.AuthorSignupButtonBox}>
          <button type="button" className={style.AuthorSignupButton} onClick={handleAuthorSignup}>작가 등록</button>
        </div>
      </div>
    </>
  )
}
