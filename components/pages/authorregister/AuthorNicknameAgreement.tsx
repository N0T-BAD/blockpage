import React from 'react'
import style from '@/components/pages/authorregister/AuthorNicknameAgreement.module.css'
import { useRouter } from 'next/router';
import { authorNicknameDataType } from '@/types/authorNameDataType';
import axios from 'axios';
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
    // try {
    //   const formData = new FormData();
    //   formData.append('requestMember', JSON.stringify({ creatorNickname: inputData.creatorNickname }), );

    //   const res = await fetch('http://10.10.10.139:8082/member-service/v1/members/test?type=author', {
    //     method: 'PUT',
    //     body: formData,
    //     headers: {
    //       memberId: session?.email || '',
    //     },
    //   });

    //   if (res.status === 200) {
    //     alert('작가 등록이 완료되었습니다.');
    //     router.push('/authorworkslist');
    //   } else {
    //     alert('작가 등록에 실패하였습니다.');
    //   }
    // } catch (err) {
    //   console.log(err);
    //   alert('작가 등록에 실패하였습니다.');
    // }

    try {
      const formData = new FormData();
      formData.append('requestMember', JSON.stringify({ "creatorNickname": inputData.creatorNickname }));
      console.log(inputData.creatorNickname)

      console.log(formData)

      const res = await fetch('https://blockpage.site/member-service/v1/members?type=author', {
        method: 'PUT',
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          memberId: session?.email || '',
          // role: role,
        },
      })
      const data = await res.json()
      console.log(data)
      if (data) {
        alert("작가 등록이 완료되었습니다.")
        router.push('/authorworkslist')
      } else {
        alert('작가 등록에 실패하였습니다.');
      }
    } catch (err) {
      console.log(err)
      alert('작가 등록에 실패하였습니다.');
    }

    // axios.put('https://blockpage.site/member-service/v1/members?type=author', {
    //   creatorNickname: inputData.creatorNickname,
    // }, {
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //     memberId: session?.email,
    //   },
    // })
    //   .then((res) => {
    //     console.log(res)
    //     if (res) {
    //       alert('작가 등록이 완료되었습니다.');
    //       router.push('/authorworkslist');
    //     } else {
    //       alert('작가 등록에 실패하였습니다.');
    //     }
    //   })
  }

  // const handleAuthorSignup = () => {
  //   //   try {
  //   //     const formData = new FormData();
  //   //     formData.append('requestMember', inputData.creatorNickname);

  //   //     const config = {
  //   //       headers: {
  //   //         'Content-Type': 'multipart/form-data',
  //   //         memberId: session?.email || '',
  //   //       },
  //   //     };

  //   //     const res = await axios.post(
  //   //       'http://10.10.10.139:8082/member-service/v1/members/test?type=author',
  //   //       {
  //   //         requestMember: { "creatorNickname": inputData.creatorNickname },
  //   //         'Content-Type': 'application/json',
  //   //       },
  //   //       config
  //   //     );

  //   //     console.log(res.data);

  //   //     if (res.status === 200) {
  //   //       alert('작가 등록이 완료되었습니다.');
  //   //       router.push('/authorworkslist');
  //   //     } else {
  //   //       alert('작가 등록에 실패하였습니다.');
  //   //     }
  //   //   } catch (err) {
  //   //     console.log(err);
  //   //     alert('작가 등록에 실패하였습니다.');
  //   //   }
  //   // };

  //   // const handleAuthorSignup = () => {
  //   //   const formData = new FormData();
  //   //   formData.append('requestMember', inputData.creatorNickname);
  //   //   const headers = new Headers();
  //   //   headers.append('Content-Type', 'application/json');
  //   //   headers.append('memberId', session?.email || '');

  //   //   fetch('http://10.10.10.139:8082/member-service/v1/members/test?type=author', {
  //   //     method: 'POST',
  //   //     body: formData,
  //   //     headers: headers,
  //   //   })
  //   //     .then((res) => {
  //   //       console.log(res)
  //   //       if (res.status === 200) {
  //   //         alert('작가 등록이 완료되었습니다.');
  //   //         router.push('/authorworkslist');
  //   //       } else {
  //   //         alert('작가 등록에 실패하였습니다.');
  //   //       }
  //   //     })
  //   //     .catch((err) => {
  //   //       console.log(err)
  //   //     })
  //   // };
  //   // try {
  //   //   const headers = new Headers();
  //   //   headers.append('Content-Type', 'application/json');
  //   //   headers.append('memberId', session?.email || '');
  //   //   console.log(headers)
  //   //   console.log()

  //   //   const res = await fetch('http://10.10.10.139:8082/member-service/v1/members/test?type=author', {
  //   //     method: 'POST',
  //   //     body: JSON.stringify({
  //   //       requestMember: { creatorNickname: inputData.creatorNickname },
  //   //       'Content-Type': 'application/json'
  //   //     }),
  //   //     headers: headers,
  //   //   });
  //   //   const data = await res.json();
  //   //   console.log(data);
  //   //   // alert('작가 등록이 완료되었습니다.');
  //   //   // router.push('/authorworkslist');
  //   // } catch (err) {
  //   //   if (err) {

  //   //     alert('작가 등록에 실패하였습니다.');
  //   //   }
  //   // }


  //   // try {
  //   //   const res = await fetch('https://blockpage.site/member-service/v1/members?type=author', {
  //   //     method: 'PUT',
  //   //     body: JSON.stringify({
  //   //       requestMember: { "creatorNickname": inputData.creatorNickname },
  //   //     }),

  //   //     headers: {
  //   //       'Content-Type': 'application/json',
  //   //       memberId: session?.email,
  //   //       // role: role,
  //   //     },
  //   //   })
  //   //   const data = await res.json()
  //   //   console.log(data)
  //   //   if (data) {
  //   //     alert("작가 등록이 완료되었습니다.")
  //   //     router.push('/authorworkslist')
  //   //   } else {
  //   //     alert('작가 등록에 실패하였습니다.');
  //   //   }

  //   axios.post('http://10.10.10.139:8082/member-service/v1/members/test?type=author',
  //     // formData,
  //     {
  //       body: {
  //         requestMember: { "creatorNickname": inputData.creatorNickname },
  //         'Content-Type': 'multipart/form-data',
  //       }
  //     },
  //     // {
  //     //   requestMember: { "creatorNickname": inputData.creatorNickname },
  //     //   'Content-Type': 'multipart/form-data',
  //     // },
  //     {
  //       headers: {
  //         memberId: session?.email,
  //         // role: role,
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res)
  //       if (res) {
  //         alert("작가 등록이 완료되었습니다.")
  //         router.push('/authorworkslist')
  //       } else {
  //         alert('작가 등록에 실패하였습니다.');
  //       }
  //     })
  //     .catch((err) => {
  //       if (err) {
  //         alert("서버 에러가 발생하였습니다.")
  //       }
  //     })
  // }


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
