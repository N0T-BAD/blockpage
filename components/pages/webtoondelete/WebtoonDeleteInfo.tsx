import { webtoonDeleteState } from '@/state/webtoon/webtoonDeleteState';
import { webtoonDeleteData, webtoonDeleteDataType, webtoonTitleDataType } from '@/types/webtoonDataType';
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

  // const [webtoonTitle, setWebtoonTitle] = useRecoilState<webtoonTitleDataType>(webtoonDeleteState);
  const [webtoonData, setWebtoonData] = useState<webtoonDeleteData>(
    {
      data: [{
        webtoonId: 0,
        webtoonTitle: '',
      }]
    }
  )

  useEffect(() => {
    axios.get("https://blockpage.site/webtoon-service/v1/webtoons/creator",
      {
        headers: {
          memberId: session?.email || '',
          // role: role,
        },
      })
      .then((res) => {
        setWebtoonData(res.data)
        console.log(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

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
      const selectedWebtoon = webtoonData.data.find((webtoon) => webtoon.webtoonId === Number(webtoonId));
      if (selectedWebtoon) {
        axios.post('https://blockpage.site/webtoon-service/v1/demands?target=webtoon&type=remove', {
          deletereason: webtoonDeleteInfoData.deletereason,
          webtoonTitle: selectedWebtoon.webtoonTitle,
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
    }
  };

  return (
    <>
      {/* {webtoonData.data.map((webtoon) => (
        webtoon.webtoonId === Number(webtoonId) && (
          <div className={style.WebtoonDeleteInfoWrap} key>
            <form onSubmit={handleSubmit}>
              <div className={style.DeleteInfoBox}>
                <p>작품명 : </p>
                <p className={style.title}>{webtoon.webtoonTitle}</p>
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
        )))} */}
    </>
  )
}
