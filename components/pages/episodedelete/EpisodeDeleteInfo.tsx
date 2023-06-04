import { EpisodeListDataType, WebToonListDataType } from '@/types/webtoonDataType';
import axios from 'axios';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil';
import style from '@/components/pages/webtoondelete/WebtoonDeleteInfo.module.css'
// import { episodeDeleteState } from '@/state/webtoon/episodeDeleteState';
import { episodeDeleteDataType } from '@/types/episodeDeleteDataType';
import { episodeData } from '@/types/episodeDeleteDataType';

export default function EpisodeDeleteInfo() {

  const router = useRouter();

  const [episodeDeleteInfoData, setEpisodeDeleteInfoData] = useState<episodeDeleteDataType>({
    episodedeletereason: '',
  });

  // const [episodeInfo, setEpisodeInfo] = useState<WebToonListDataType>();

  useEffect(() => {
    console.log(episodeDeleteInfoData)
  }, [episodeDeleteInfoData])

  // useEffect(() => {
  //     axios(`/api/authorwebtooninfo/${router.query.id}`)
  //         .then(res => res.data)
  //         .then(data => setEpisodeInfo(data))
  // }, [episodeInfo])

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEpisodeDeleteInfoData({
      ...episodeDeleteInfoData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (episodeDeleteInfoData.episodedeletereason === '') {
      alert('회차 삭제 사유를 입력해주세요.')
    } else {
      axios.post('/api', {
        episodedeletereason: episodeDeleteInfoData.episodedeletereason,
      })
        .then((res) => {
          console.log(res)
          alert('회차 삭제 요청이 완료되었습니다.')
          router.push('/authorworkslist')
        })
    }
  };

  return (
    <>
      <div className={style.WebtoonDeleteInfoWrap}>
        <form onSubmit={handleSubmit}>
          <div className={style.DeleteInfoBox}>
            <p>작품명 : </p>
            <p className={style.title}>{props.episodeData.title}</p>
          </div>
          <div className={style.DeleteInfoBox}>
            <p>에피소드 회차 : </p>
            <p className={style.title}>{props.episodeData.id}화</p>
          </div>
          <div className={style.DeleteInfoBox_2}>
            <p>삭제 이유 : </p>
            <input type="text" name="episodedeletereason" onChange={handleInput} />
          </div>
          <div className={style.submit}>
            <button type="submit">삭제</button>
          </div>
        </form>
      </div>
    </>
  )
}
