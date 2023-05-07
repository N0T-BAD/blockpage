import { episodeDeleteDataType, webtoonepisodeDataType } from '@/types/webtoonDataType';
import axios from 'axios';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil';
import style from '@/components/pages/webtoondelete/WebtoonDeleteInfo.module.css'
import { episodeDeleteState } from '@/state/webtoon/episodeDeleteState';

export default function EpisodeDeleteInfo() {

    const router = useRouter();

    const [episodeDeleteInfoData, setEpisodeDeleteInfoData] = useState<episodeDeleteDataType>({
        episodedeletereason: '',
    });

    const [episodeInfo, setEpisodeInfo] = useRecoilState<webtoonepisodeDataType>(episodeDeleteState);

    useEffect(() => {
        console.log(episodeDeleteInfoData)
        console.log(episodeInfo)
    }, [episodeDeleteInfoData, episodeInfo])

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
                    setEpisodeInfo(
                        {
                            id: res.data.id,
                            title: res.data.title,
                        }
                    )
                    alert('회차 삭제 요첨이 완료되었습니다.')
                    router.push('/authorworkslist')
                })
        }
    };

    return (
        <div className={style.WebtoonDeleteInfoWrap}>
            <form onSubmit={handleSubmit}>
                <div className={style.DeleteInfoBox}>
                    <p>작품명 : </p>
                    <p className={style.title}>{episodeInfo.title}</p>
                </div>
                <div className={style.DeleteInfoBox}>
                    <p>에피소드 회차 : </p>
                    <p className={style.title}>{episodeInfo.id}화</p>
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
    )
}
