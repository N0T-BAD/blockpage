import { webtoonDeleteState } from '@/state/webtoon/webtoonDeleteState';
import { webtoonDeleteDataType, webtoonTitleDataType } from '@/types/webtoonDataType';
import axios from 'axios';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil';
import style from '@/components/pages/webtoondelete/WebtoonDeleteInfo.module.css'
import { useSession } from 'next-auth/react';

export default function WebtoonDeleteInfo() {

  const router = useRouter();
  const { data: session } = useSession()
  // const role = sessionStorage.getItem('role');
  const { webtoonId } = router.query;

  const [webtoonDeleteInfoData, setWebtoonDeleteInfoData] = useState<webtoonDeleteDataType>({
    deletereason: '',
  });

  const [webtoonTitle, setWebtoonTitle] = useRecoilState<webtoonTitleDataType>(webtoonDeleteState);

  useEffect(() => {
    console.log(webtoonDeleteInfoData)
    console.log(webtoonTitle)
  }, [webtoonDeleteInfoData, webtoonTitle])

  useEffect(() => {
    axios(`/api/authorwebtooninfo/${router.query.id}`)
      .then(res => res.data)
      .then(data => setWebtoonTitle(data))
  }, [router.query.id, setWebtoonTitle])

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setWebtoonDeleteInfoData({
      ...webtoonDeleteInfoData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (webtoonDeleteInfoData.deletereason === '') {
      alert('웹툰 삭제 사유를 입력해주세요.')
    } else {
      axios.post('/api', {
        deletereason: webtoonDeleteInfoData.deletereason,
        webtoonTitle: webtoonTitle.webtoonTitle,
        webtoonId: webtoonId,
      },
        {
          headers: {
            memberId: session?.email,
            // role: role,
          },
        },
      )
        .then((res) => {
          console.log(res)
          alert('웹툰 삭제 요청이 완료되었습니다.')
          router.push('/authorworkslist')
        })
    }
  };

  return (
    <>
      {webtoonTitle &&
        <div className={style.WebtoonDeleteInfoWrap}>
          <form onSubmit={handleSubmit}>
            <div className={style.DeleteInfoBox}>
              <p>작품명 : </p>
              <p className={style.title}>{webtoonTitle.webtoonTitle}</p>
            </div>
            <div className={style.DeleteInfoBox_2}>
              <p>삭제 이유 : </p>
              <input type="text" name="deletereason" onChange={handleInput} />
            </div>
            <div className={style.submit}>
              <button type="submit">삭제</button>
            </div>
          </form>
        </div>
      }
    </>
  )
}
