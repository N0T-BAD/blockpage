import React, { useEffect, useState } from 'react'
import style from '@/components/pages/webtooninfo/AuthorWebtoonInfoForm.module.css'
import AuthorWebtoonInfoImgBox from './AuthorWebtoonInfoImgBox';
import { authorWebtoonInfoDataType, authorWebtoonInfoImgDataType } from '@/types/authorWebtoonInfoImgDataType';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function AuthorWebtoonInfoForm() {

    const router = useRouter();

    const [webtoonInfoData, setWebtoonInfoData] = useState<authorWebtoonInfoDataType>({
        title: '',
        description: '',
        genre: '',
        day: '',
        author: '',
        illustrator: '',
    });

    const [webtoonInfoImgData, setWebtoonInfoImgData] = useState<authorWebtoonInfoImgDataType[]>([]);

    useEffect(() => {
        console.log(webtoonInfoData)
        console.log(webtoonInfoImgData)
    }, [webtoonInfoData, webtoonInfoImgData])



    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setWebtoonInfoData({
            ...webtoonInfoData,
            [name]: value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (webtoonInfoData.title === '' || webtoonInfoData.description === '' || webtoonInfoData.genre === '' || webtoonInfoData.day === '' || webtoonInfoData.author === '') {
            alert('웹툰 정보를 입력해주세요.')
        } else if (webtoonInfoImgData[0] === undefined || webtoonInfoImgData[1] === undefined) {
            alert('웹툰 이미지를 입력해주세요.')
        } else {
            axios.post('/api/authorwebtooninfo', {
                title: webtoonInfoData.title,
                description: webtoonInfoData.description,
                genre: webtoonInfoData.genre,
                day: webtoonInfoData.day,
                author: webtoonInfoData.author,
                illustrator: webtoonInfoData.illustrator,
                mainImage: webtoonInfoImgData[0].mainImage,
                thumbnailImage: webtoonInfoImgData[1].thumbnailImage,
            })
                .then((res) => {
                    if (res) {
                        router.push('/success'); // '/success'로 이동
                        alert('웹툰 정보가 등록되었습니다.')
                    }
                })
        }
    };

    return (
        <>
            <div className={style.WebtoonInfoWrap}>
                <form onSubmit={handleSubmit}>
                    <div className={style.InfoBox}>
                        <p>작품명 : </p>
                        <input type="text" name="title" onChange={handleInput} />
                    </div>
                    <div className={style.InfoBox}>
                        <p>줄거리 : </p>
                        <input type="text" name="description" onChange={handleInput} />
                    </div>
                    <div className={style.InfoBox}>
                        <p>장르 : </p>
                        <input type="text" name="genre" onChange={handleInput} />
                    </div>
                    <div className={style.InfoBox}>
                        <p>요일 : </p>
                        <input type="text" name="day" onChange={handleInput} />
                    </div>
                    <div className={style.InfoBox}>
                        <p>작가 : </p>
                        <input type="text" name="author" onChange={handleInput} />
                    </div>
                    <div className={style.InfoillustratorBox}>
                        <p>일러스트레이터 : </p>
                        <input type="text" name="illustrator" placeholder='미입력시, 본인으로 등록됩니다.' onChange={handleInput} />
                    </div>
                    <AuthorWebtoonInfoImgBox onUpload={(data: authorWebtoonInfoImgDataType) => {
                        setWebtoonInfoImgData([...webtoonInfoImgData, data])
                    }} isRequired={true} />

                    <div className={style.submit}>
                        <button className={style.submit} type="submit">등록</button>
                    </div>
                </form>
            </div>
        </>
    )
}
