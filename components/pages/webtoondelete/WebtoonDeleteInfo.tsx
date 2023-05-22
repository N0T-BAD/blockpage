import { webtoonDeleteState } from '@/state/webtoon/webtoonDeleteState';
import { webtoonDeleteDataType, webtoonTitleDataType } from '@/types/webtoonDataType';
import axios from 'axios';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil';
import style from '@/components/pages/webtoondelete/WebtoonDeleteInfo.module.css'

export default function WebtoonDeleteInfo() {

    const router = useRouter();

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
            })
                .then((res) => {
                    console.log(res)
                    alert('웹툰 삭제 요첨이 완료되었습니다.')
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
                            <p className={style.title}>{webtoonTitle.title}</p>
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
